// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/

export default function DomainException(message) {
  const error = new Error(message);
  return error;
}

DomainException.prototype = Object.create(Error.prototype);
