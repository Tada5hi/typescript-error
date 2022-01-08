import {
    buildErrorOptions,
    determineErrorMessage,
    ErrorOptions,
    setUnsetErrorOptions
} from '@typescript-error/core';
import { ClientError } from '../base';

export class UnauthorizedError extends ClientError {
    constructor(data?: string | Error | ErrorOptions, options?: ErrorOptions) {
        options = setUnsetErrorOptions(
            buildErrorOptions(data, options),
            {
                code: `UNAUTHORIZED`,
                statusCode: 401,
                decorateMessage: false,
                logMessage: false
            },
        );

        let message = determineErrorMessage(data, options);
        if (!message) {
            message = `Unauthorized`;
        }

        super(message, options);
    }
}
