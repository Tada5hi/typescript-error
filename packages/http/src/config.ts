export const ClientErrorOptions = {
    BadRequest: {statusCode: 400, message: "Bad Request", code: "BAD_REQUEST"},
    Unauthorized: {statusCode: 401, message: "Unauthorized", code: "UNAUTHORIZED"},
    Forbidden: {statusCode: 403, message: "Forbidden", code: "FORBIDDEN"},
    NotFound: {statusCode: 404, message: "Not Found", code: "NOT_FOUND"},
    MethodNotAllowed: {statusCode: 405, message: "Method Not Allowed", code: "METHOD_NOT_ALLOWED"},
    NotAcceptable: {statusCode: 406, message: "Not Acceptable", code: "NOT_ACCEPTABLE"},
    ProxyAuthenticationRequired: {
        statusCode: 407,
        message: "Proxy Authentication Required",
        code: "PROXY_AUTHENTICATION_REQUIRED"
    },
    RequestTimeout: {statusCode: 408, message: "Request Timeout", code: "REQUEST_TIMEOUT"},
    Conflict: {statusCode: 409, message: "Conflict", code: "CONFLICT"},
    Gone: {statusCode: 410, message: "Gone", code: "GONE"},
    LengthRequired: {statusCode: 411, message: "Length Required", code: "LENGTH_REQUIRED"},
    PreconditionFailed: {statusCode: 412, message: "Precondition Failed", code: "PRECONDITION_FAILED"},
    RequestEntityTooLarge: {statusCode: 413, message: "REQUEST_ENTITY_TOO_LARGE", code: "REQUEST_ENTITY_TOO_LARGE"},
    RequestURITooLong: {statusCode: 414, message: "Request-URI Too Long", code: "REQUEST_URI_TOO_LONG"},
    UnsupportedMediaType: {statusCode: 415, message: "Unsupported Media Type", code: "UNSUPPORTED_MEDIA_TYPE"},
    RequestedRangeNotSatisfiable: {
        statusCode: 416,
        message: "Requested Range Not Satisfiable",
        code: "REQUESTED_RANGE_NOT_SATISFIABLE"
    },
    ExpectationFailed: {statusCode: 417, message: "Expectation Failed", code: "EXPECTATION_FAILED"},
    ImATeapot: {statusCode: 418, message: "I'm a Teapot", code: "IM_A_TEAPOT"},
    EnhanceYourCalm: {statusCode: 420, message: "Enhance Your Calm", code: "ENHANCE_YOUR_CALM"},
    UnprocessableEntity: {statusCode: 422, message: "Unprocessable Entity", code: "UNPROCESSABLE_ENTITY"},
    Locked: {statusCode: 423, message: "Locked", code: "LOCKED"},
    FailedDependency: {statusCode: 424, message: "Failed Dependency", code: "FAILED_DEPENDENCY"},
    UnorderedCollection: {statusCode: 425, message: "Unordered Collection", code: "UNORDERED_COLLECTION"},
    UpgradeRequired: {statusCode: 424, message: "Upgrade Required", code: "UPGRADE_REQUIRED"},
    PreconditionRequired: {statusCode: 428, message: "Precondition Required", code: "PRECONDITION_REQUIRED"},
    TooManyRequests: {statusCode: 429, message: "Too Many Requests", code: "TOO_MANY_REQUESTS"},
    RequestHeaderFieldsTooLarge: {
        statusCode: 431,
        message: "Request Header Fields Too Large",
        code: "REQUEST_HEADER_FIELDS_TOO_LARGE"
    },
    NoResponse: {statusCode: 444, message: "No Response", code: "NO_RESPONSE"},
    RetryWith: {statusCode: 449, message: "Retry With", code: "RETRY_WITH"},
    BlockedByWindowsParentalControls: {
        statusCode: 450,
        message: "Blocked By Windows Parental Controls",
        code: "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS"
    },
    ClientClosedRequest: {statusCode: 499, message: "Client Closed Request", code: "CLIENT_CLOSED_REQUEST"}
};

export const ServerErrorOptions = {
    InternalServerError: {statusCode: 500, message: "Internal Server Error", code: "INTERNAL_SERVER_ERROR"},
    NotImplemented: {statusCode: 501, message: "Not Implemented", code: "NOT_IMPLEMENTED"},
    BadGateway: {statusCode: 502, message: "Bad Gateway", code: "BAD_GATEWAY"},
    ServiceUnavailable: {statusCode: 503, message: "Service Unavailable", code: "SERVICE_UNAVAILABLE"},
    GatewayTimeout: {statusCode: 504, message: "Gateway Timeout", code: "GATEWAY_TIMEOUT"},
    HTTPVersionNotSupported: {statusCode: 505, message: "HTTP Version Not Supported", code: "HTTP_VERSION_NOT_SUPPORTED"},
    VariantAlsoNegotiates: {statusCode: 506, message: "Variant Also Negotiates", code: "VARIANT_ALSO_NEGOTIATES"},
    InsufficientStorage: {statusCode: 507, message: "Insufficient Storage", code: "INSUFFICIENT_STORAGE"},
    LoopDetected: {statusCode: 508, message: "Loop Detected", code: "LOOP_DETECTED"},
    BandwidthLimitExceeded: {statusCode: 509, message: "Bandwidth Limit Exceeded", code: "BANDWIDTH_LIMIT_EXCEEDED"},
    NotExtended: {statusCode: 510, message: "Not Extended", code: "NOT_EXTENDED"},
    NetworkAuthenticationRequired: {statusCode: 511, message: "Network Authentication Required", code: "NETWORK_AUTHENTICATION_REQUIRED"},
};
