import {ErrorOptions} from "./type";

export * from './type';

export class BaseError extends Error {
    public readonly options : ErrorOptions = {};

    //--------------------------------------------------------------------

    constructor(message?: string, options?: ErrorOptions) {
        super(message);

        if (this.name === undefined || this.name === "Error") {
            Object.defineProperty(this, "name", {
                configurable: true,
                enumerable: false,
                value: this.constructor.name,
                writable: true,
            });
        }

        this.setOptions(options);

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else if(typeof this.stack === 'undefined' || this.stack === "") {
            this.stack = new Error(message).stack;
        }
    }

    //--------------------------------------------------------------------

    public getOptions() : ErrorOptions {
        return this.options;
    }

    public getOption<T extends keyof ErrorOptions>(key: T) : ErrorOptions[T] | undefined {
        return this.options[key];
    }

    //--------------------------------------------------------------------

    setOptions(options?: ErrorOptions) : void {
        options = options ?? {};

        for(let k in options) {
            const key : keyof ErrorOptions = k as keyof ErrorOptions;
            this.setOption(key, options[key]);
        }
    }

    public setOption<T extends keyof ErrorOptions>(key: T, value: ErrorOptions[T]) {
        Object.assign(this.options, {[key]: value});
    }
}
