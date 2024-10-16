import { ConflictError } from './conflict-error';
import { PrismaClientError } from './prisma-client-error';

export class UniqueConstraintError extends ConflictError {
  constructor(error: PrismaClientError) {
    const unique = error.meta?.target;

    super(
      `The ${unique} you provided already exists. Please try again with a different ${unique}.`,
    );
  }
}
