import { DatabaseError } from '../types/database-error';
import { PrismaClientError } from '../types/prisma-client-error';
import { UniqueConstraintError } from '../types/unique-constraint-error';

enum PrismaError {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseError = (error: PrismaClientError) => {
  switch (error.code) {
    case PrismaError.UniqueConstraintFail:
      return new UniqueConstraintError(error);
    default:
      return new DatabaseError(error.message);
  }
};
