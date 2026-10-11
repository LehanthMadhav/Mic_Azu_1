
const { TableClient } = require("@azure/data-tables");
const { randomUUID } = require("crypto");

const TABLE_NAME = "ContactMessages";

function respond(context, status, body) {
  context.res = {
    status,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };
}

module.exports = async function (context, req) {
  if (req.method !== "POST") {
    respond(context, 405, {
      success: false,
      message: "Method not allowed. Use POST.",
    });
    return;
  }

  const input = req.body;

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    respond(context, 400, {
      success: false,
      message: "A valid JSON request body is required.",
    });
    return;
  }

  const name =
    typeof input.name === "string" ? input.name.trim() : "";

  const email =
    typeof input.email === "string" ? input.email.trim() : "";

  const subject =
    typeof input.subject === "string" ? input.subject.trim() : "";

  const message =
    typeof input.message === "string" ? input.message.trim() : "";

  const errors = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "Name must contain between 2 and 100 characters.";
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (subject.length < 3 || subject.length > 150) {
    errors.subject = "Subject must contain between 3 and 150 characters.";
  }

  if (message.length < 10 || message.length > 3000) {
    errors.message = "Message must contain between 10 and 3000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    respond(context, 400, {
      success: false,
      message: "Please correct the submitted form data.",
      errors,
    });
    return;
  }

  const connectionString =
    process.env.TABLE_STORAGE_CONNECTION_STRING;

  if (!connectionString) {
    respond(context, 500, {
      success: false,
      message: "Contact storage is not configured.",
    });
    return;
  }

  try {
    const tableClient = TableClient.fromConnectionString(
      connectionString,
      TABLE_NAME
    );

    // Create the table if it doesn't exist.
    try {
      await tableClient.createTable();
    } catch (error) {
      const tableAlreadyExists =
        error.statusCode === 409 ||
        error.code === "TableAlreadyExists";

      if (!tableAlreadyExists) {
        throw error;
      }
    }

    // Save the validated contact message.
    const entity = {
      partitionKey: "contacts",
      rowKey: `${Date.now()}-${randomUUID()}`,
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    };

    await tableClient.createEntity(entity);

    respond(context, 201, {
      success: true,
      stored: true,
      message: "Your message has been saved successfully.",
    });
  } catch (error) {
    // Log the storage error, not the visitor's submitted message.
    context.log.error(
      "Failed to save contact message to Table Storage.",
      error.message
    );

    respond(context, 500, {
      success: false,
      message: "Unable to save your message. Please try again later.",
    });
  }
};
