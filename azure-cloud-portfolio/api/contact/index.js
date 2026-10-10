
module.exports = async function (context, req) {
  const respond = (status, body) => {
    context.res = {
      status,
      headers: {
        "Content-Type": "application/json"
      },
      body
    };
  };

  // Only accept POST requests.
  if (req.method !== "POST") {
    respond(405, {
      success: false,
      message: "Method not allowed. Use POST."
    });
    return;
  }

  const input = req.body;

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    respond(400, {
      success: false,
      message: "A valid JSON request body is required."
    });
    return;
  }

  // Read and normalize submitted fields.
  const name =
    typeof input.name === "string" ? input.name.trim() : "";

  const email =
    typeof input.email === "string" ? input.email.trim() : "";

  const subject =
    typeof input.subject === "string" ? input.subject.trim() : "";

  const message =
    typeof input.message === "string" ? input.message.trim() : "";

  // Validate the data.
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
    respond(400, {
      success: false,
      message: "Please correct the submitted form data.",
      errors
    });
    return;
  }

  // Storage has not been connected yet.
  context.log("Contact payload passed validation.");

  respond(200, {
    success: true,
    validated: true,
    stored: false,
    message:
      "Contact data passed validation. Message storage is not configured yet."
  });
};
