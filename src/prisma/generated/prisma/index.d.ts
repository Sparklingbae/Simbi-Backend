
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model StudyPlan
 * 
 */
export type StudyPlan = $Result.DefaultSelection<Prisma.$StudyPlanPayload>
/**
 * Model StudySession
 * 
 */
export type StudySession = $Result.DefaultSelection<Prisma.$StudySessionPayload>
/**
 * Model PlanDailyStatus
 * 
 */
export type PlanDailyStatus = $Result.DefaultSelection<Prisma.$PlanDailyStatusPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model QuizQuestion
 * 
 */
export type QuizQuestion = $Result.DefaultSelection<Prisma.$QuizQuestionPayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model QuizAttemptQuestion
 * 
 */
export type QuizAttemptQuestion = $Result.DefaultSelection<Prisma.$QuizAttemptQuestionPayload>
/**
 * Model ProgressTracking
 * 
 */
export type ProgressTracking = $Result.DefaultSelection<Prisma.$ProgressTrackingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const DailyStatus: {
  COMPLETED: 'COMPLETED',
  PARTIAL: 'PARTIAL',
  MISSED: 'MISSED'
};

export type DailyStatus = (typeof DailyStatus)[keyof typeof DailyStatus]


export const MilestoneStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  MISSED: 'MISSED'
};

export type MilestoneStatus = (typeof MilestoneStatus)[keyof typeof MilestoneStatus]


export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  TRUE_FALSE: 'TRUE_FALSE',
  SHORT_ANSWER: 'SHORT_ANSWER'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]

}

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type DailyStatus = $Enums.DailyStatus

export const DailyStatus: typeof $Enums.DailyStatus

export type MilestoneStatus = $Enums.MilestoneStatus

export const MilestoneStatus: typeof $Enums.MilestoneStatus

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyPlan`: Exposes CRUD operations for the **StudyPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyPlans
    * const studyPlans = await prisma.studyPlan.findMany()
    * ```
    */
  get studyPlan(): Prisma.StudyPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studySession`: Exposes CRUD operations for the **StudySession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudySessions
    * const studySessions = await prisma.studySession.findMany()
    * ```
    */
  get studySession(): Prisma.StudySessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planDailyStatus`: Exposes CRUD operations for the **PlanDailyStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanDailyStatuses
    * const planDailyStatuses = await prisma.planDailyStatus.findMany()
    * ```
    */
  get planDailyStatus(): Prisma.PlanDailyStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestion`: Exposes CRUD operations for the **QuizQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestions
    * const quizQuestions = await prisma.quizQuestion.findMany()
    * ```
    */
  get quizQuestion(): Prisma.QuizQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttemptQuestion`: Exposes CRUD operations for the **QuizAttemptQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttemptQuestions
    * const quizAttemptQuestions = await prisma.quizAttemptQuestion.findMany()
    * ```
    */
  get quizAttemptQuestion(): Prisma.QuizAttemptQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressTracking`: Exposes CRUD operations for the **ProgressTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressTrackings
    * const progressTrackings = await prisma.progressTracking.findMany()
    * ```
    */
  get progressTracking(): Prisma.ProgressTrackingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Subject: 'Subject',
    StudyPlan: 'StudyPlan',
    StudySession: 'StudySession',
    PlanDailyStatus: 'PlanDailyStatus',
    Milestone: 'Milestone',
    QuizQuestion: 'QuizQuestion',
    QuizAttempt: 'QuizAttempt',
    QuizAttemptQuestion: 'QuizAttemptQuestion',
    ProgressTracking: 'ProgressTracking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subject" | "studyPlan" | "studySession" | "planDailyStatus" | "milestone" | "quizQuestion" | "quizAttempt" | "quizAttemptQuestion" | "progressTracking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      StudyPlan: {
        payload: Prisma.$StudyPlanPayload<ExtArgs>
        fields: Prisma.StudyPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findFirst: {
            args: Prisma.StudyPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          findMany: {
            args: Prisma.StudyPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          create: {
            args: Prisma.StudyPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          createMany: {
            args: Prisma.StudyPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          delete: {
            args: Prisma.StudyPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          update: {
            args: Prisma.StudyPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          deleteMany: {
            args: Prisma.StudyPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>[]
          }
          upsert: {
            args: Prisma.StudyPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPlanPayload>
          }
          aggregate: {
            args: Prisma.StudyPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyPlan>
          }
          groupBy: {
            args: Prisma.StudyPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyPlanCountArgs<ExtArgs>
            result: $Utils.Optional<StudyPlanCountAggregateOutputType> | number
          }
        }
      }
      StudySession: {
        payload: Prisma.$StudySessionPayload<ExtArgs>
        fields: Prisma.StudySessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudySessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudySessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          findFirst: {
            args: Prisma.StudySessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudySessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          findMany: {
            args: Prisma.StudySessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>[]
          }
          create: {
            args: Prisma.StudySessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          createMany: {
            args: Prisma.StudySessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudySessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>[]
          }
          delete: {
            args: Prisma.StudySessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          update: {
            args: Prisma.StudySessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          deleteMany: {
            args: Prisma.StudySessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudySessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudySessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>[]
          }
          upsert: {
            args: Prisma.StudySessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySessionPayload>
          }
          aggregate: {
            args: Prisma.StudySessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudySession>
          }
          groupBy: {
            args: Prisma.StudySessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudySessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudySessionCountArgs<ExtArgs>
            result: $Utils.Optional<StudySessionCountAggregateOutputType> | number
          }
        }
      }
      PlanDailyStatus: {
        payload: Prisma.$PlanDailyStatusPayload<ExtArgs>
        fields: Prisma.PlanDailyStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanDailyStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanDailyStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>
          }
          findFirst: {
            args: Prisma.PlanDailyStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanDailyStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>
          }
          findMany: {
            args: Prisma.PlanDailyStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>[]
          }
          create: {
            args: Prisma.PlanDailyStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>
          }
          createMany: {
            args: Prisma.PlanDailyStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanDailyStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>[]
          }
          delete: {
            args: Prisma.PlanDailyStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>
          }
          update: {
            args: Prisma.PlanDailyStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>
          }
          deleteMany: {
            args: Prisma.PlanDailyStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanDailyStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanDailyStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>[]
          }
          upsert: {
            args: Prisma.PlanDailyStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDailyStatusPayload>
          }
          aggregate: {
            args: Prisma.PlanDailyStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanDailyStatus>
          }
          groupBy: {
            args: Prisma.PlanDailyStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanDailyStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanDailyStatusCountArgs<ExtArgs>
            result: $Utils.Optional<PlanDailyStatusCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestion: {
        payload: Prisma.$QuizQuestionPayload<ExtArgs>
        fields: Prisma.QuizQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          delete: {
            args: Prisma.QuizQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          update: {
            args: Prisma.QuizQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuizQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestion>
          }
          groupBy: {
            args: Prisma.QuizQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      QuizAttemptQuestion: {
        payload: Prisma.$QuizAttemptQuestionPayload<ExtArgs>
        fields: Prisma.QuizAttemptQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAttemptQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>[]
          }
          delete: {
            args: Prisma.QuizAttemptQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>
          }
          update: {
            args: Prisma.QuizAttemptQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAttemptQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuizAttemptQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptQuestionPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttemptQuestion>
          }
          groupBy: {
            args: Prisma.QuizAttemptQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptQuestionCountAggregateOutputType> | number
          }
        }
      }
      ProgressTracking: {
        payload: Prisma.$ProgressTrackingPayload<ExtArgs>
        fields: Prisma.ProgressTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>
          }
          findFirst: {
            args: Prisma.ProgressTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>
          }
          findMany: {
            args: Prisma.ProgressTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>[]
          }
          create: {
            args: Prisma.ProgressTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>
          }
          createMany: {
            args: Prisma.ProgressTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>[]
          }
          delete: {
            args: Prisma.ProgressTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>
          }
          update: {
            args: Prisma.ProgressTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>
          }
          deleteMany: {
            args: Prisma.ProgressTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>[]
          }
          upsert: {
            args: Prisma.ProgressTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressTrackingPayload>
          }
          aggregate: {
            args: Prisma.ProgressTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressTracking>
          }
          groupBy: {
            args: Prisma.ProgressTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressTrackingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subject?: SubjectOmit
    studyPlan?: StudyPlanOmit
    studySession?: StudySessionOmit
    planDailyStatus?: PlanDailyStatusOmit
    milestone?: MilestoneOmit
    quizQuestion?: QuizQuestionOmit
    quizAttempt?: QuizAttemptOmit
    quizAttemptQuestion?: QuizAttemptQuestionOmit
    progressTracking?: ProgressTrackingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subjects: number
    studyPlans: number
    studySessions: number
    milestones: number
    quizAttempts: number
    progressTracking: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | UserCountOutputTypeCountSubjectsArgs
    studyPlans?: boolean | UserCountOutputTypeCountStudyPlansArgs
    studySessions?: boolean | UserCountOutputTypeCountStudySessionsArgs
    milestones?: boolean | UserCountOutputTypeCountMilestonesArgs
    quizAttempts?: boolean | UserCountOutputTypeCountQuizAttemptsArgs
    progressTracking?: boolean | UserCountOutputTypeCountProgressTrackingArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudySessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressTrackingWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    studyPlans: number
    quizQuestions: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyPlans?: boolean | SubjectCountOutputTypeCountStudyPlansArgs
    quizQuestions?: boolean | SubjectCountOutputTypeCountQuizQuestionsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountQuizQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
  }


  /**
   * Count Type StudyPlanCountOutputType
   */

  export type StudyPlanCountOutputType = {
    studySessions: number
    planDailyStatus: number
    milestones: number
  }

  export type StudyPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studySessions?: boolean | StudyPlanCountOutputTypeCountStudySessionsArgs
    planDailyStatus?: boolean | StudyPlanCountOutputTypeCountPlanDailyStatusArgs
    milestones?: boolean | StudyPlanCountOutputTypeCountMilestonesArgs
  }

  // Custom InputTypes
  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlanCountOutputType
     */
    select?: StudyPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeCountStudySessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySessionWhereInput
  }

  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeCountPlanDailyStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDailyStatusWhereInput
  }

  /**
   * StudyPlanCountOutputType without action
   */
  export type StudyPlanCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }


  /**
   * Count Type QuizQuestionCountOutputType
   */

  export type QuizQuestionCountOutputType = {
    quizAttemptQuestions: number
  }

  export type QuizQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttemptQuestions?: boolean | QuizQuestionCountOutputTypeCountQuizAttemptQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionCountOutputType
     */
    select?: QuizQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountQuizAttemptQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptQuestionWhereInput
  }


  /**
   * Count Type QuizAttemptCountOutputType
   */

  export type QuizAttemptCountOutputType = {
    quizAttemptQuestions: number
  }

  export type QuizAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttemptQuestions?: boolean | QuizAttemptCountOutputTypeCountQuizAttemptQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuizAttemptCountOutputType without action
   */
  export type QuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptCountOutputType
     */
    select?: QuizAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizAttemptCountOutputType without action
   */
  export type QuizAttemptCountOutputTypeCountQuizAttemptQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    educationLevel: string | null
    timezone: string | null
    preferredStudyMethod: string | null
    createdAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    educationLevel: string | null
    timezone: string | null
    preferredStudyMethod: string | null
    createdAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    educationLevel: number
    timezone: number
    preferredStudyMethod: number
    createdAt: number
    lastLogin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    educationLevel?: true
    timezone?: true
    preferredStudyMethod?: true
    createdAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    educationLevel?: true
    timezone?: true
    preferredStudyMethod?: true
    createdAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    educationLevel?: true
    timezone?: true
    preferredStudyMethod?: true
    createdAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    firstName: string | null
    lastName: string | null
    educationLevel: string | null
    timezone: string | null
    preferredStudyMethod: string | null
    createdAt: Date
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    educationLevel?: boolean
    timezone?: boolean
    preferredStudyMethod?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    subjects?: boolean | User$subjectsArgs<ExtArgs>
    studyPlans?: boolean | User$studyPlansArgs<ExtArgs>
    studySessions?: boolean | User$studySessionsArgs<ExtArgs>
    milestones?: boolean | User$milestonesArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    progressTracking?: boolean | User$progressTrackingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    educationLevel?: boolean
    timezone?: boolean
    preferredStudyMethod?: boolean
    createdAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    educationLevel?: boolean
    timezone?: boolean
    preferredStudyMethod?: boolean
    createdAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    educationLevel?: boolean
    timezone?: boolean
    preferredStudyMethod?: boolean
    createdAt?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "firstName" | "lastName" | "educationLevel" | "timezone" | "preferredStudyMethod" | "createdAt" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | User$subjectsArgs<ExtArgs>
    studyPlans?: boolean | User$studyPlansArgs<ExtArgs>
    studySessions?: boolean | User$studySessionsArgs<ExtArgs>
    milestones?: boolean | User$milestonesArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    progressTracking?: boolean | User$progressTrackingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
      studyPlans: Prisma.$StudyPlanPayload<ExtArgs>[]
      studySessions: Prisma.$StudySessionPayload<ExtArgs>[]
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      progressTracking: Prisma.$ProgressTrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      firstName: string | null
      lastName: string | null
      educationLevel: string | null
      timezone: string | null
      preferredStudyMethod: string | null
      createdAt: Date
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends User$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyPlans<T extends User$studyPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$studyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studySessions<T extends User$studySessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$studySessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milestones<T extends User$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, User$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizAttempts<T extends User$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressTracking<T extends User$progressTrackingArgs<ExtArgs> = {}>(args?: Subset<T, User$progressTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly educationLevel: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly preferredStudyMethod: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.subjects
   */
  export type User$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * User.studyPlans
   */
  export type User$studyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    cursor?: StudyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * User.studySessions
   */
  export type User$studySessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    where?: StudySessionWhereInput
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    cursor?: StudySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * User.milestones
   */
  export type User$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * User.quizAttempts
   */
  export type User$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * User.progressTracking
   */
  export type User$progressTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    where?: ProgressTrackingWhereInput
    orderBy?: ProgressTrackingOrderByWithRelationInput | ProgressTrackingOrderByWithRelationInput[]
    cursor?: ProgressTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressTrackingScalarFieldEnum | ProgressTrackingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    educationYear: number | null
    difficultyLevel: number | null
    priority: number | null
  }

  export type SubjectSumAggregateOutputType = {
    educationYear: number | null
    difficultyLevel: number | null
    priority: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    educationLevel: string | null
    educationYear: number | null
    colorCode: string | null
    difficultyLevel: number | null
    priority: number | null
    createdAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    educationLevel: string | null
    educationYear: number | null
    colorCode: string | null
    difficultyLevel: number | null
    priority: number | null
    createdAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    educationLevel: number
    educationYear: number
    colorCode: number
    difficultyLevel: number
    priority: number
    createdAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    educationYear?: true
    difficultyLevel?: true
    priority?: true
  }

  export type SubjectSumAggregateInputType = {
    educationYear?: true
    difficultyLevel?: true
    priority?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    educationLevel?: true
    educationYear?: true
    colorCode?: true
    difficultyLevel?: true
    priority?: true
    createdAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    educationLevel?: true
    educationYear?: true
    colorCode?: true
    difficultyLevel?: true
    priority?: true
    createdAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    educationLevel?: true
    educationYear?: true
    colorCode?: true
    difficultyLevel?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    educationLevel: string
    educationYear: number | null
    colorCode: string
    difficultyLevel: number
    priority: number
    createdAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    educationLevel?: boolean
    educationYear?: boolean
    colorCode?: boolean
    difficultyLevel?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studyPlans?: boolean | Subject$studyPlansArgs<ExtArgs>
    quizQuestions?: boolean | Subject$quizQuestionsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    educationLevel?: boolean
    educationYear?: boolean
    colorCode?: boolean
    difficultyLevel?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    educationLevel?: boolean
    educationYear?: boolean
    colorCode?: boolean
    difficultyLevel?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    educationLevel?: boolean
    educationYear?: boolean
    colorCode?: boolean
    difficultyLevel?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "educationLevel" | "educationYear" | "colorCode" | "difficultyLevel" | "priority" | "createdAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studyPlans?: boolean | Subject$studyPlansArgs<ExtArgs>
    quizQuestions?: boolean | Subject$quizQuestionsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      studyPlans: Prisma.$StudyPlanPayload<ExtArgs>[]
      quizQuestions: Prisma.$QuizQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      educationLevel: string
      educationYear: number | null
      colorCode: string
      difficultyLevel: number
      priority: number
      createdAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studyPlans<T extends Subject$studyPlansArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizQuestions<T extends Subject$quizQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$quizQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly userId: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly educationLevel: FieldRef<"Subject", 'String'>
    readonly educationYear: FieldRef<"Subject", 'Int'>
    readonly colorCode: FieldRef<"Subject", 'String'>
    readonly difficultyLevel: FieldRef<"Subject", 'Int'>
    readonly priority: FieldRef<"Subject", 'Int'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.studyPlans
   */
  export type Subject$studyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    cursor?: StudyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * Subject.quizQuestions
   */
  export type Subject$quizQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    cursor?: QuizQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model StudyPlan
   */

  export type AggregateStudyPlan = {
    _count: StudyPlanCountAggregateOutputType | null
    _avg: StudyPlanAvgAggregateOutputType | null
    _sum: StudyPlanSumAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  export type StudyPlanAvgAggregateOutputType = {
    dailyTargetMinutes: number | null
  }

  export type StudyPlanSumAggregateOutputType = {
    dailyTargetMinutes: number | null
  }

  export type StudyPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    planName: string | null
    dailyTargetMinutes: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    lastUpdated: Date | null
    status: $Enums.PlanStatus | null
  }

  export type StudyPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    planName: string | null
    dailyTargetMinutes: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    lastUpdated: Date | null
    status: $Enums.PlanStatus | null
  }

  export type StudyPlanCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    planName: number
    dailyTargetMinutes: number
    startDate: number
    endDate: number
    createdAt: number
    lastUpdated: number
    status: number
    _all: number
  }


  export type StudyPlanAvgAggregateInputType = {
    dailyTargetMinutes?: true
  }

  export type StudyPlanSumAggregateInputType = {
    dailyTargetMinutes?: true
  }

  export type StudyPlanMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    planName?: true
    dailyTargetMinutes?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    lastUpdated?: true
    status?: true
  }

  export type StudyPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    planName?: true
    dailyTargetMinutes?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    lastUpdated?: true
    status?: true
  }

  export type StudyPlanCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    planName?: true
    dailyTargetMinutes?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    lastUpdated?: true
    status?: true
    _all?: true
  }

  export type StudyPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlan to aggregate.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyPlans
    **/
    _count?: true | StudyPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyPlanMaxAggregateInputType
  }

  export type GetStudyPlanAggregateType<T extends StudyPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyPlan[P]>
      : GetScalarType<T[P], AggregateStudyPlan[P]>
  }




  export type StudyPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyPlanWhereInput
    orderBy?: StudyPlanOrderByWithAggregationInput | StudyPlanOrderByWithAggregationInput[]
    by: StudyPlanScalarFieldEnum[] | StudyPlanScalarFieldEnum
    having?: StudyPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyPlanCountAggregateInputType | true
    _avg?: StudyPlanAvgAggregateInputType
    _sum?: StudyPlanSumAggregateInputType
    _min?: StudyPlanMinAggregateInputType
    _max?: StudyPlanMaxAggregateInputType
  }

  export type StudyPlanGroupByOutputType = {
    id: string
    userId: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date
    endDate: Date
    createdAt: Date
    lastUpdated: Date
    status: $Enums.PlanStatus
    _count: StudyPlanCountAggregateOutputType | null
    _avg: StudyPlanAvgAggregateOutputType | null
    _sum: StudyPlanSumAggregateOutputType | null
    _min: StudyPlanMinAggregateOutputType | null
    _max: StudyPlanMaxAggregateOutputType | null
  }

  type GetStudyPlanGroupByPayload<T extends StudyPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
            : GetScalarType<T[P], StudyPlanGroupByOutputType[P]>
        }
      >
    >


  export type StudyPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    planName?: boolean
    dailyTargetMinutes?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    lastUpdated?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    studySessions?: boolean | StudyPlan$studySessionsArgs<ExtArgs>
    planDailyStatus?: boolean | StudyPlan$planDailyStatusArgs<ExtArgs>
    milestones?: boolean | StudyPlan$milestonesArgs<ExtArgs>
    _count?: boolean | StudyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    planName?: boolean
    dailyTargetMinutes?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    lastUpdated?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    planName?: boolean
    dailyTargetMinutes?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    lastUpdated?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyPlan"]>

  export type StudyPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    planName?: boolean
    dailyTargetMinutes?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    lastUpdated?: boolean
    status?: boolean
  }

  export type StudyPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subjectId" | "planName" | "dailyTargetMinutes" | "startDate" | "endDate" | "createdAt" | "lastUpdated" | "status", ExtArgs["result"]["studyPlan"]>
  export type StudyPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    studySessions?: boolean | StudyPlan$studySessionsArgs<ExtArgs>
    planDailyStatus?: boolean | StudyPlan$planDailyStatusArgs<ExtArgs>
    milestones?: boolean | StudyPlan$milestonesArgs<ExtArgs>
    _count?: boolean | StudyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudyPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $StudyPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      studySessions: Prisma.$StudySessionPayload<ExtArgs>[]
      planDailyStatus: Prisma.$PlanDailyStatusPayload<ExtArgs>[]
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectId: string
      planName: string
      dailyTargetMinutes: number
      startDate: Date
      endDate: Date
      createdAt: Date
      lastUpdated: Date
      status: $Enums.PlanStatus
    }, ExtArgs["result"]["studyPlan"]>
    composites: {}
  }

  type StudyPlanGetPayload<S extends boolean | null | undefined | StudyPlanDefaultArgs> = $Result.GetResult<Prisma.$StudyPlanPayload, S>

  type StudyPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyPlanCountAggregateInputType | true
    }

  export interface StudyPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyPlan'], meta: { name: 'StudyPlan' } }
    /**
     * Find zero or one StudyPlan that matches the filter.
     * @param {StudyPlanFindUniqueArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyPlanFindUniqueArgs>(args: SelectSubset<T, StudyPlanFindUniqueArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyPlanFindUniqueOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyPlanFindFirstArgs>(args?: SelectSubset<T, StudyPlanFindFirstArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindFirstOrThrowArgs} args - Arguments to find a StudyPlan
     * @example
     * // Get one StudyPlan
     * const studyPlan = await prisma.studyPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany()
     * 
     * // Get first 10 StudyPlans
     * const studyPlans = await prisma.studyPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyPlanFindManyArgs>(args?: SelectSubset<T, StudyPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyPlan.
     * @param {StudyPlanCreateArgs} args - Arguments to create a StudyPlan.
     * @example
     * // Create one StudyPlan
     * const StudyPlan = await prisma.studyPlan.create({
     *   data: {
     *     // ... data to create a StudyPlan
     *   }
     * })
     * 
     */
    create<T extends StudyPlanCreateArgs>(args: SelectSubset<T, StudyPlanCreateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyPlans.
     * @param {StudyPlanCreateManyArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyPlanCreateManyArgs>(args?: SelectSubset<T, StudyPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyPlans and returns the data saved in the database.
     * @param {StudyPlanCreateManyAndReturnArgs} args - Arguments to create many StudyPlans.
     * @example
     * // Create many StudyPlans
     * const studyPlan = await prisma.studyPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyPlan.
     * @param {StudyPlanDeleteArgs} args - Arguments to delete one StudyPlan.
     * @example
     * // Delete one StudyPlan
     * const StudyPlan = await prisma.studyPlan.delete({
     *   where: {
     *     // ... filter to delete one StudyPlan
     *   }
     * })
     * 
     */
    delete<T extends StudyPlanDeleteArgs>(args: SelectSubset<T, StudyPlanDeleteArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyPlan.
     * @param {StudyPlanUpdateArgs} args - Arguments to update one StudyPlan.
     * @example
     * // Update one StudyPlan
     * const studyPlan = await prisma.studyPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyPlanUpdateArgs>(args: SelectSubset<T, StudyPlanUpdateArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyPlans.
     * @param {StudyPlanDeleteManyArgs} args - Arguments to filter StudyPlans to delete.
     * @example
     * // Delete a few StudyPlans
     * const { count } = await prisma.studyPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyPlanDeleteManyArgs>(args?: SelectSubset<T, StudyPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyPlanUpdateManyArgs>(args: SelectSubset<T, StudyPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPlans and returns the data updated in the database.
     * @param {StudyPlanUpdateManyAndReturnArgs} args - Arguments to update many StudyPlans.
     * @example
     * // Update many StudyPlans
     * const studyPlan = await prisma.studyPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyPlans and only return the `id`
     * const studyPlanWithIdOnly = await prisma.studyPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyPlan.
     * @param {StudyPlanUpsertArgs} args - Arguments to update or create a StudyPlan.
     * @example
     * // Update or create a StudyPlan
     * const studyPlan = await prisma.studyPlan.upsert({
     *   create: {
     *     // ... data to create a StudyPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyPlan we want to update
     *   }
     * })
     */
    upsert<T extends StudyPlanUpsertArgs>(args: SelectSubset<T, StudyPlanUpsertArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanCountArgs} args - Arguments to filter StudyPlans to count.
     * @example
     * // Count the number of StudyPlans
     * const count = await prisma.studyPlan.count({
     *   where: {
     *     // ... the filter for the StudyPlans we want to count
     *   }
     * })
    **/
    count<T extends StudyPlanCountArgs>(
      args?: Subset<T, StudyPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyPlanAggregateArgs>(args: Subset<T, StudyPlanAggregateArgs>): Prisma.PrismaPromise<GetStudyPlanAggregateType<T>>

    /**
     * Group by StudyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyPlanGroupByArgs['orderBy'] }
        : { orderBy?: StudyPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyPlan model
   */
  readonly fields: StudyPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studySessions<T extends StudyPlan$studySessionsArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlan$studySessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planDailyStatus<T extends StudyPlan$planDailyStatusArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlan$planDailyStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milestones<T extends StudyPlan$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlan$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyPlan model
   */
  interface StudyPlanFieldRefs {
    readonly id: FieldRef<"StudyPlan", 'String'>
    readonly userId: FieldRef<"StudyPlan", 'String'>
    readonly subjectId: FieldRef<"StudyPlan", 'String'>
    readonly planName: FieldRef<"StudyPlan", 'String'>
    readonly dailyTargetMinutes: FieldRef<"StudyPlan", 'Int'>
    readonly startDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly endDate: FieldRef<"StudyPlan", 'DateTime'>
    readonly createdAt: FieldRef<"StudyPlan", 'DateTime'>
    readonly lastUpdated: FieldRef<"StudyPlan", 'DateTime'>
    readonly status: FieldRef<"StudyPlan", 'PlanStatus'>
  }
    

  // Custom InputTypes
  /**
   * StudyPlan findUnique
   */
  export type StudyPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findUniqueOrThrow
   */
  export type StudyPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan findFirst
   */
  export type StudyPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findFirstOrThrow
   */
  export type StudyPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlan to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPlans.
     */
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan findMany
   */
  export type StudyPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter, which StudyPlans to fetch.
     */
    where?: StudyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPlans to fetch.
     */
    orderBy?: StudyPlanOrderByWithRelationInput | StudyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyPlans.
     */
    cursor?: StudyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPlans.
     */
    skip?: number
    distinct?: StudyPlanScalarFieldEnum | StudyPlanScalarFieldEnum[]
  }

  /**
   * StudyPlan create
   */
  export type StudyPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyPlan.
     */
    data: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
  }

  /**
   * StudyPlan createMany
   */
  export type StudyPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyPlan createManyAndReturn
   */
  export type StudyPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to create many StudyPlans.
     */
    data: StudyPlanCreateManyInput | StudyPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan update
   */
  export type StudyPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyPlan.
     */
    data: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
    /**
     * Choose, which StudyPlan to update.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan updateMany
   */
  export type StudyPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
  }

  /**
   * StudyPlan updateManyAndReturn
   */
  export type StudyPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * The data used to update StudyPlans.
     */
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyInput>
    /**
     * Filter which StudyPlans to update
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyPlan upsert
   */
  export type StudyPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyPlan to update in case it exists.
     */
    where: StudyPlanWhereUniqueInput
    /**
     * In case the StudyPlan found by the `where` argument doesn't exist, create a new StudyPlan with this data.
     */
    create: XOR<StudyPlanCreateInput, StudyPlanUncheckedCreateInput>
    /**
     * In case the StudyPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyPlanUpdateInput, StudyPlanUncheckedUpdateInput>
  }

  /**
   * StudyPlan delete
   */
  export type StudyPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    /**
     * Filter which StudyPlan to delete.
     */
    where: StudyPlanWhereUniqueInput
  }

  /**
   * StudyPlan deleteMany
   */
  export type StudyPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPlans to delete
     */
    where?: StudyPlanWhereInput
    /**
     * Limit how many StudyPlans to delete.
     */
    limit?: number
  }

  /**
   * StudyPlan.studySessions
   */
  export type StudyPlan$studySessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    where?: StudySessionWhereInput
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    cursor?: StudySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudyPlan.planDailyStatus
   */
  export type StudyPlan$planDailyStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    where?: PlanDailyStatusWhereInput
    orderBy?: PlanDailyStatusOrderByWithRelationInput | PlanDailyStatusOrderByWithRelationInput[]
    cursor?: PlanDailyStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanDailyStatusScalarFieldEnum | PlanDailyStatusScalarFieldEnum[]
  }

  /**
   * StudyPlan.milestones
   */
  export type StudyPlan$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * StudyPlan without action
   */
  export type StudyPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
  }


  /**
   * Model StudySession
   */

  export type AggregateStudySession = {
    _count: StudySessionCountAggregateOutputType | null
    _avg: StudySessionAvgAggregateOutputType | null
    _sum: StudySessionSumAggregateOutputType | null
    _min: StudySessionMinAggregateOutputType | null
    _max: StudySessionMaxAggregateOutputType | null
  }

  export type StudySessionAvgAggregateOutputType = {
    durationMinutes: number | null
    productivityRating: number | null
  }

  export type StudySessionSumAggregateOutputType = {
    durationMinutes: number | null
    productivityRating: number | null
  }

  export type StudySessionMinAggregateOutputType = {
    id: string | null
    planId: string | null
    userId: string | null
    sessionDate: Date | null
    startTime: Date | null
    endTime: Date | null
    durationMinutes: number | null
    notes: string | null
    productivityRating: number | null
    simbiReaction: string | null
  }

  export type StudySessionMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    userId: string | null
    sessionDate: Date | null
    startTime: Date | null
    endTime: Date | null
    durationMinutes: number | null
    notes: string | null
    productivityRating: number | null
    simbiReaction: string | null
  }

  export type StudySessionCountAggregateOutputType = {
    id: number
    planId: number
    userId: number
    sessionDate: number
    startTime: number
    endTime: number
    durationMinutes: number
    notes: number
    productivityRating: number
    simbiReaction: number
    _all: number
  }


  export type StudySessionAvgAggregateInputType = {
    durationMinutes?: true
    productivityRating?: true
  }

  export type StudySessionSumAggregateInputType = {
    durationMinutes?: true
    productivityRating?: true
  }

  export type StudySessionMinAggregateInputType = {
    id?: true
    planId?: true
    userId?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    notes?: true
    productivityRating?: true
    simbiReaction?: true
  }

  export type StudySessionMaxAggregateInputType = {
    id?: true
    planId?: true
    userId?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    notes?: true
    productivityRating?: true
    simbiReaction?: true
  }

  export type StudySessionCountAggregateInputType = {
    id?: true
    planId?: true
    userId?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    notes?: true
    productivityRating?: true
    simbiReaction?: true
    _all?: true
  }

  export type StudySessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudySession to aggregate.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudySessions
    **/
    _count?: true | StudySessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudySessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudySessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudySessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudySessionMaxAggregateInputType
  }

  export type GetStudySessionAggregateType<T extends StudySessionAggregateArgs> = {
        [P in keyof T & keyof AggregateStudySession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudySession[P]>
      : GetScalarType<T[P], AggregateStudySession[P]>
  }




  export type StudySessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySessionWhereInput
    orderBy?: StudySessionOrderByWithAggregationInput | StudySessionOrderByWithAggregationInput[]
    by: StudySessionScalarFieldEnum[] | StudySessionScalarFieldEnum
    having?: StudySessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudySessionCountAggregateInputType | true
    _avg?: StudySessionAvgAggregateInputType
    _sum?: StudySessionSumAggregateInputType
    _min?: StudySessionMinAggregateInputType
    _max?: StudySessionMaxAggregateInputType
  }

  export type StudySessionGroupByOutputType = {
    id: string
    planId: string
    userId: string
    sessionDate: Date
    startTime: Date
    endTime: Date
    durationMinutes: number
    notes: string | null
    productivityRating: number | null
    simbiReaction: string
    _count: StudySessionCountAggregateOutputType | null
    _avg: StudySessionAvgAggregateOutputType | null
    _sum: StudySessionSumAggregateOutputType | null
    _min: StudySessionMinAggregateOutputType | null
    _max: StudySessionMaxAggregateOutputType | null
  }

  type GetStudySessionGroupByPayload<T extends StudySessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudySessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudySessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudySessionGroupByOutputType[P]>
            : GetScalarType<T[P], StudySessionGroupByOutputType[P]>
        }
      >
    >


  export type StudySessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    userId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    notes?: boolean
    productivityRating?: boolean
    simbiReaction?: boolean
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySession"]>

  export type StudySessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    userId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    notes?: boolean
    productivityRating?: boolean
    simbiReaction?: boolean
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySession"]>

  export type StudySessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    userId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    notes?: boolean
    productivityRating?: boolean
    simbiReaction?: boolean
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySession"]>

  export type StudySessionSelectScalar = {
    id?: boolean
    planId?: boolean
    userId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    notes?: boolean
    productivityRating?: boolean
    simbiReaction?: boolean
  }

  export type StudySessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "userId" | "sessionDate" | "startTime" | "endTime" | "durationMinutes" | "notes" | "productivityRating" | "simbiReaction", ExtArgs["result"]["studySession"]>
  export type StudySessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudySessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudySessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudySessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudySession"
    objects: {
      plan: Prisma.$StudyPlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      userId: string
      sessionDate: Date
      startTime: Date
      endTime: Date
      durationMinutes: number
      notes: string | null
      productivityRating: number | null
      simbiReaction: string
    }, ExtArgs["result"]["studySession"]>
    composites: {}
  }

  type StudySessionGetPayload<S extends boolean | null | undefined | StudySessionDefaultArgs> = $Result.GetResult<Prisma.$StudySessionPayload, S>

  type StudySessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudySessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudySessionCountAggregateInputType | true
    }

  export interface StudySessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudySession'], meta: { name: 'StudySession' } }
    /**
     * Find zero or one StudySession that matches the filter.
     * @param {StudySessionFindUniqueArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudySessionFindUniqueArgs>(args: SelectSubset<T, StudySessionFindUniqueArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudySession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudySessionFindUniqueOrThrowArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudySessionFindUniqueOrThrowArgs>(args: SelectSubset<T, StudySessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudySession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionFindFirstArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudySessionFindFirstArgs>(args?: SelectSubset<T, StudySessionFindFirstArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudySession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionFindFirstOrThrowArgs} args - Arguments to find a StudySession
     * @example
     * // Get one StudySession
     * const studySession = await prisma.studySession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudySessionFindFirstOrThrowArgs>(args?: SelectSubset<T, StudySessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudySessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudySessions
     * const studySessions = await prisma.studySession.findMany()
     * 
     * // Get first 10 StudySessions
     * const studySessions = await prisma.studySession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studySessionWithIdOnly = await prisma.studySession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudySessionFindManyArgs>(args?: SelectSubset<T, StudySessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudySession.
     * @param {StudySessionCreateArgs} args - Arguments to create a StudySession.
     * @example
     * // Create one StudySession
     * const StudySession = await prisma.studySession.create({
     *   data: {
     *     // ... data to create a StudySession
     *   }
     * })
     * 
     */
    create<T extends StudySessionCreateArgs>(args: SelectSubset<T, StudySessionCreateArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudySessions.
     * @param {StudySessionCreateManyArgs} args - Arguments to create many StudySessions.
     * @example
     * // Create many StudySessions
     * const studySession = await prisma.studySession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudySessionCreateManyArgs>(args?: SelectSubset<T, StudySessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudySessions and returns the data saved in the database.
     * @param {StudySessionCreateManyAndReturnArgs} args - Arguments to create many StudySessions.
     * @example
     * // Create many StudySessions
     * const studySession = await prisma.studySession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudySessions and only return the `id`
     * const studySessionWithIdOnly = await prisma.studySession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudySessionCreateManyAndReturnArgs>(args?: SelectSubset<T, StudySessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudySession.
     * @param {StudySessionDeleteArgs} args - Arguments to delete one StudySession.
     * @example
     * // Delete one StudySession
     * const StudySession = await prisma.studySession.delete({
     *   where: {
     *     // ... filter to delete one StudySession
     *   }
     * })
     * 
     */
    delete<T extends StudySessionDeleteArgs>(args: SelectSubset<T, StudySessionDeleteArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudySession.
     * @param {StudySessionUpdateArgs} args - Arguments to update one StudySession.
     * @example
     * // Update one StudySession
     * const studySession = await prisma.studySession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudySessionUpdateArgs>(args: SelectSubset<T, StudySessionUpdateArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudySessions.
     * @param {StudySessionDeleteManyArgs} args - Arguments to filter StudySessions to delete.
     * @example
     * // Delete a few StudySessions
     * const { count } = await prisma.studySession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudySessionDeleteManyArgs>(args?: SelectSubset<T, StudySessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudySessions
     * const studySession = await prisma.studySession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudySessionUpdateManyArgs>(args: SelectSubset<T, StudySessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudySessions and returns the data updated in the database.
     * @param {StudySessionUpdateManyAndReturnArgs} args - Arguments to update many StudySessions.
     * @example
     * // Update many StudySessions
     * const studySession = await prisma.studySession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudySessions and only return the `id`
     * const studySessionWithIdOnly = await prisma.studySession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudySessionUpdateManyAndReturnArgs>(args: SelectSubset<T, StudySessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudySession.
     * @param {StudySessionUpsertArgs} args - Arguments to update or create a StudySession.
     * @example
     * // Update or create a StudySession
     * const studySession = await prisma.studySession.upsert({
     *   create: {
     *     // ... data to create a StudySession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudySession we want to update
     *   }
     * })
     */
    upsert<T extends StudySessionUpsertArgs>(args: SelectSubset<T, StudySessionUpsertArgs<ExtArgs>>): Prisma__StudySessionClient<$Result.GetResult<Prisma.$StudySessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionCountArgs} args - Arguments to filter StudySessions to count.
     * @example
     * // Count the number of StudySessions
     * const count = await prisma.studySession.count({
     *   where: {
     *     // ... the filter for the StudySessions we want to count
     *   }
     * })
    **/
    count<T extends StudySessionCountArgs>(
      args?: Subset<T, StudySessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudySessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudySessionAggregateArgs>(args: Subset<T, StudySessionAggregateArgs>): Prisma.PrismaPromise<GetStudySessionAggregateType<T>>

    /**
     * Group by StudySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudySessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudySessionGroupByArgs['orderBy'] }
        : { orderBy?: StudySessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudySessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudySessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudySession model
   */
  readonly fields: StudySessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudySession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudySessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends StudyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlanDefaultArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudySession model
   */
  interface StudySessionFieldRefs {
    readonly id: FieldRef<"StudySession", 'String'>
    readonly planId: FieldRef<"StudySession", 'String'>
    readonly userId: FieldRef<"StudySession", 'String'>
    readonly sessionDate: FieldRef<"StudySession", 'DateTime'>
    readonly startTime: FieldRef<"StudySession", 'DateTime'>
    readonly endTime: FieldRef<"StudySession", 'DateTime'>
    readonly durationMinutes: FieldRef<"StudySession", 'Int'>
    readonly notes: FieldRef<"StudySession", 'String'>
    readonly productivityRating: FieldRef<"StudySession", 'Int'>
    readonly simbiReaction: FieldRef<"StudySession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudySession findUnique
   */
  export type StudySessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession findUniqueOrThrow
   */
  export type StudySessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession findFirst
   */
  export type StudySessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudySessions.
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudySessions.
     */
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudySession findFirstOrThrow
   */
  export type StudySessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySession to fetch.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudySessions.
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudySessions.
     */
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudySession findMany
   */
  export type StudySessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter, which StudySessions to fetch.
     */
    where?: StudySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySessions to fetch.
     */
    orderBy?: StudySessionOrderByWithRelationInput | StudySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudySessions.
     */
    cursor?: StudySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySessions.
     */
    skip?: number
    distinct?: StudySessionScalarFieldEnum | StudySessionScalarFieldEnum[]
  }

  /**
   * StudySession create
   */
  export type StudySessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * The data needed to create a StudySession.
     */
    data: XOR<StudySessionCreateInput, StudySessionUncheckedCreateInput>
  }

  /**
   * StudySession createMany
   */
  export type StudySessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudySessions.
     */
    data: StudySessionCreateManyInput | StudySessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudySession createManyAndReturn
   */
  export type StudySessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * The data used to create many StudySessions.
     */
    data: StudySessionCreateManyInput | StudySessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudySession update
   */
  export type StudySessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * The data needed to update a StudySession.
     */
    data: XOR<StudySessionUpdateInput, StudySessionUncheckedUpdateInput>
    /**
     * Choose, which StudySession to update.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession updateMany
   */
  export type StudySessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudySessions.
     */
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyInput>
    /**
     * Filter which StudySessions to update
     */
    where?: StudySessionWhereInput
    /**
     * Limit how many StudySessions to update.
     */
    limit?: number
  }

  /**
   * StudySession updateManyAndReturn
   */
  export type StudySessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * The data used to update StudySessions.
     */
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyInput>
    /**
     * Filter which StudySessions to update
     */
    where?: StudySessionWhereInput
    /**
     * Limit how many StudySessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudySession upsert
   */
  export type StudySessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * The filter to search for the StudySession to update in case it exists.
     */
    where: StudySessionWhereUniqueInput
    /**
     * In case the StudySession found by the `where` argument doesn't exist, create a new StudySession with this data.
     */
    create: XOR<StudySessionCreateInput, StudySessionUncheckedCreateInput>
    /**
     * In case the StudySession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudySessionUpdateInput, StudySessionUncheckedUpdateInput>
  }

  /**
   * StudySession delete
   */
  export type StudySessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
    /**
     * Filter which StudySession to delete.
     */
    where: StudySessionWhereUniqueInput
  }

  /**
   * StudySession deleteMany
   */
  export type StudySessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudySessions to delete
     */
    where?: StudySessionWhereInput
    /**
     * Limit how many StudySessions to delete.
     */
    limit?: number
  }

  /**
   * StudySession without action
   */
  export type StudySessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySession
     */
    select?: StudySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySession
     */
    omit?: StudySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySessionInclude<ExtArgs> | null
  }


  /**
   * Model PlanDailyStatus
   */

  export type AggregatePlanDailyStatus = {
    _count: PlanDailyStatusCountAggregateOutputType | null
    _avg: PlanDailyStatusAvgAggregateOutputType | null
    _sum: PlanDailyStatusSumAggregateOutputType | null
    _min: PlanDailyStatusMinAggregateOutputType | null
    _max: PlanDailyStatusMaxAggregateOutputType | null
  }

  export type PlanDailyStatusAvgAggregateOutputType = {
    totalMinutesStudied: number | null
  }

  export type PlanDailyStatusSumAggregateOutputType = {
    totalMinutesStudied: number | null
  }

  export type PlanDailyStatusMinAggregateOutputType = {
    id: string | null
    planId: string | null
    date: Date | null
    totalMinutesStudied: number | null
    targetAchieved: boolean | null
    status: $Enums.DailyStatus | null
  }

  export type PlanDailyStatusMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    date: Date | null
    totalMinutesStudied: number | null
    targetAchieved: boolean | null
    status: $Enums.DailyStatus | null
  }

  export type PlanDailyStatusCountAggregateOutputType = {
    id: number
    planId: number
    date: number
    totalMinutesStudied: number
    targetAchieved: number
    status: number
    _all: number
  }


  export type PlanDailyStatusAvgAggregateInputType = {
    totalMinutesStudied?: true
  }

  export type PlanDailyStatusSumAggregateInputType = {
    totalMinutesStudied?: true
  }

  export type PlanDailyStatusMinAggregateInputType = {
    id?: true
    planId?: true
    date?: true
    totalMinutesStudied?: true
    targetAchieved?: true
    status?: true
  }

  export type PlanDailyStatusMaxAggregateInputType = {
    id?: true
    planId?: true
    date?: true
    totalMinutesStudied?: true
    targetAchieved?: true
    status?: true
  }

  export type PlanDailyStatusCountAggregateInputType = {
    id?: true
    planId?: true
    date?: true
    totalMinutesStudied?: true
    targetAchieved?: true
    status?: true
    _all?: true
  }

  export type PlanDailyStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanDailyStatus to aggregate.
     */
    where?: PlanDailyStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDailyStatuses to fetch.
     */
    orderBy?: PlanDailyStatusOrderByWithRelationInput | PlanDailyStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanDailyStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDailyStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDailyStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanDailyStatuses
    **/
    _count?: true | PlanDailyStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanDailyStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanDailyStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanDailyStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanDailyStatusMaxAggregateInputType
  }

  export type GetPlanDailyStatusAggregateType<T extends PlanDailyStatusAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanDailyStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanDailyStatus[P]>
      : GetScalarType<T[P], AggregatePlanDailyStatus[P]>
  }




  export type PlanDailyStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDailyStatusWhereInput
    orderBy?: PlanDailyStatusOrderByWithAggregationInput | PlanDailyStatusOrderByWithAggregationInput[]
    by: PlanDailyStatusScalarFieldEnum[] | PlanDailyStatusScalarFieldEnum
    having?: PlanDailyStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanDailyStatusCountAggregateInputType | true
    _avg?: PlanDailyStatusAvgAggregateInputType
    _sum?: PlanDailyStatusSumAggregateInputType
    _min?: PlanDailyStatusMinAggregateInputType
    _max?: PlanDailyStatusMaxAggregateInputType
  }

  export type PlanDailyStatusGroupByOutputType = {
    id: string
    planId: string
    date: Date
    totalMinutesStudied: number
    targetAchieved: boolean
    status: $Enums.DailyStatus
    _count: PlanDailyStatusCountAggregateOutputType | null
    _avg: PlanDailyStatusAvgAggregateOutputType | null
    _sum: PlanDailyStatusSumAggregateOutputType | null
    _min: PlanDailyStatusMinAggregateOutputType | null
    _max: PlanDailyStatusMaxAggregateOutputType | null
  }

  type GetPlanDailyStatusGroupByPayload<T extends PlanDailyStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanDailyStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanDailyStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanDailyStatusGroupByOutputType[P]>
            : GetScalarType<T[P], PlanDailyStatusGroupByOutputType[P]>
        }
      >
    >


  export type PlanDailyStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    date?: boolean
    totalMinutesStudied?: boolean
    targetAchieved?: boolean
    status?: boolean
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDailyStatus"]>

  export type PlanDailyStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    date?: boolean
    totalMinutesStudied?: boolean
    targetAchieved?: boolean
    status?: boolean
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDailyStatus"]>

  export type PlanDailyStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    date?: boolean
    totalMinutesStudied?: boolean
    targetAchieved?: boolean
    status?: boolean
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDailyStatus"]>

  export type PlanDailyStatusSelectScalar = {
    id?: boolean
    planId?: boolean
    date?: boolean
    totalMinutesStudied?: boolean
    targetAchieved?: boolean
    status?: boolean
  }

  export type PlanDailyStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "date" | "totalMinutesStudied" | "targetAchieved" | "status", ExtArgs["result"]["planDailyStatus"]>
  export type PlanDailyStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }
  export type PlanDailyStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }
  export type PlanDailyStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | StudyPlanDefaultArgs<ExtArgs>
  }

  export type $PlanDailyStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanDailyStatus"
    objects: {
      plan: Prisma.$StudyPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      date: Date
      totalMinutesStudied: number
      targetAchieved: boolean
      status: $Enums.DailyStatus
    }, ExtArgs["result"]["planDailyStatus"]>
    composites: {}
  }

  type PlanDailyStatusGetPayload<S extends boolean | null | undefined | PlanDailyStatusDefaultArgs> = $Result.GetResult<Prisma.$PlanDailyStatusPayload, S>

  type PlanDailyStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanDailyStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanDailyStatusCountAggregateInputType | true
    }

  export interface PlanDailyStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanDailyStatus'], meta: { name: 'PlanDailyStatus' } }
    /**
     * Find zero or one PlanDailyStatus that matches the filter.
     * @param {PlanDailyStatusFindUniqueArgs} args - Arguments to find a PlanDailyStatus
     * @example
     * // Get one PlanDailyStatus
     * const planDailyStatus = await prisma.planDailyStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanDailyStatusFindUniqueArgs>(args: SelectSubset<T, PlanDailyStatusFindUniqueArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanDailyStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanDailyStatusFindUniqueOrThrowArgs} args - Arguments to find a PlanDailyStatus
     * @example
     * // Get one PlanDailyStatus
     * const planDailyStatus = await prisma.planDailyStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanDailyStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanDailyStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanDailyStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusFindFirstArgs} args - Arguments to find a PlanDailyStatus
     * @example
     * // Get one PlanDailyStatus
     * const planDailyStatus = await prisma.planDailyStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanDailyStatusFindFirstArgs>(args?: SelectSubset<T, PlanDailyStatusFindFirstArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanDailyStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusFindFirstOrThrowArgs} args - Arguments to find a PlanDailyStatus
     * @example
     * // Get one PlanDailyStatus
     * const planDailyStatus = await prisma.planDailyStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanDailyStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanDailyStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanDailyStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanDailyStatuses
     * const planDailyStatuses = await prisma.planDailyStatus.findMany()
     * 
     * // Get first 10 PlanDailyStatuses
     * const planDailyStatuses = await prisma.planDailyStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planDailyStatusWithIdOnly = await prisma.planDailyStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanDailyStatusFindManyArgs>(args?: SelectSubset<T, PlanDailyStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanDailyStatus.
     * @param {PlanDailyStatusCreateArgs} args - Arguments to create a PlanDailyStatus.
     * @example
     * // Create one PlanDailyStatus
     * const PlanDailyStatus = await prisma.planDailyStatus.create({
     *   data: {
     *     // ... data to create a PlanDailyStatus
     *   }
     * })
     * 
     */
    create<T extends PlanDailyStatusCreateArgs>(args: SelectSubset<T, PlanDailyStatusCreateArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanDailyStatuses.
     * @param {PlanDailyStatusCreateManyArgs} args - Arguments to create many PlanDailyStatuses.
     * @example
     * // Create many PlanDailyStatuses
     * const planDailyStatus = await prisma.planDailyStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanDailyStatusCreateManyArgs>(args?: SelectSubset<T, PlanDailyStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanDailyStatuses and returns the data saved in the database.
     * @param {PlanDailyStatusCreateManyAndReturnArgs} args - Arguments to create many PlanDailyStatuses.
     * @example
     * // Create many PlanDailyStatuses
     * const planDailyStatus = await prisma.planDailyStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanDailyStatuses and only return the `id`
     * const planDailyStatusWithIdOnly = await prisma.planDailyStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanDailyStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanDailyStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanDailyStatus.
     * @param {PlanDailyStatusDeleteArgs} args - Arguments to delete one PlanDailyStatus.
     * @example
     * // Delete one PlanDailyStatus
     * const PlanDailyStatus = await prisma.planDailyStatus.delete({
     *   where: {
     *     // ... filter to delete one PlanDailyStatus
     *   }
     * })
     * 
     */
    delete<T extends PlanDailyStatusDeleteArgs>(args: SelectSubset<T, PlanDailyStatusDeleteArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanDailyStatus.
     * @param {PlanDailyStatusUpdateArgs} args - Arguments to update one PlanDailyStatus.
     * @example
     * // Update one PlanDailyStatus
     * const planDailyStatus = await prisma.planDailyStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanDailyStatusUpdateArgs>(args: SelectSubset<T, PlanDailyStatusUpdateArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanDailyStatuses.
     * @param {PlanDailyStatusDeleteManyArgs} args - Arguments to filter PlanDailyStatuses to delete.
     * @example
     * // Delete a few PlanDailyStatuses
     * const { count } = await prisma.planDailyStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDailyStatusDeleteManyArgs>(args?: SelectSubset<T, PlanDailyStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanDailyStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanDailyStatuses
     * const planDailyStatus = await prisma.planDailyStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanDailyStatusUpdateManyArgs>(args: SelectSubset<T, PlanDailyStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanDailyStatuses and returns the data updated in the database.
     * @param {PlanDailyStatusUpdateManyAndReturnArgs} args - Arguments to update many PlanDailyStatuses.
     * @example
     * // Update many PlanDailyStatuses
     * const planDailyStatus = await prisma.planDailyStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanDailyStatuses and only return the `id`
     * const planDailyStatusWithIdOnly = await prisma.planDailyStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanDailyStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanDailyStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanDailyStatus.
     * @param {PlanDailyStatusUpsertArgs} args - Arguments to update or create a PlanDailyStatus.
     * @example
     * // Update or create a PlanDailyStatus
     * const planDailyStatus = await prisma.planDailyStatus.upsert({
     *   create: {
     *     // ... data to create a PlanDailyStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanDailyStatus we want to update
     *   }
     * })
     */
    upsert<T extends PlanDailyStatusUpsertArgs>(args: SelectSubset<T, PlanDailyStatusUpsertArgs<ExtArgs>>): Prisma__PlanDailyStatusClient<$Result.GetResult<Prisma.$PlanDailyStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanDailyStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusCountArgs} args - Arguments to filter PlanDailyStatuses to count.
     * @example
     * // Count the number of PlanDailyStatuses
     * const count = await prisma.planDailyStatus.count({
     *   where: {
     *     // ... the filter for the PlanDailyStatuses we want to count
     *   }
     * })
    **/
    count<T extends PlanDailyStatusCountArgs>(
      args?: Subset<T, PlanDailyStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanDailyStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanDailyStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanDailyStatusAggregateArgs>(args: Subset<T, PlanDailyStatusAggregateArgs>): Prisma.PrismaPromise<GetPlanDailyStatusAggregateType<T>>

    /**
     * Group by PlanDailyStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDailyStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanDailyStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanDailyStatusGroupByArgs['orderBy'] }
        : { orderBy?: PlanDailyStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanDailyStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanDailyStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanDailyStatus model
   */
  readonly fields: PlanDailyStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanDailyStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanDailyStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends StudyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyPlanDefaultArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanDailyStatus model
   */
  interface PlanDailyStatusFieldRefs {
    readonly id: FieldRef<"PlanDailyStatus", 'String'>
    readonly planId: FieldRef<"PlanDailyStatus", 'String'>
    readonly date: FieldRef<"PlanDailyStatus", 'DateTime'>
    readonly totalMinutesStudied: FieldRef<"PlanDailyStatus", 'Int'>
    readonly targetAchieved: FieldRef<"PlanDailyStatus", 'Boolean'>
    readonly status: FieldRef<"PlanDailyStatus", 'DailyStatus'>
  }
    

  // Custom InputTypes
  /**
   * PlanDailyStatus findUnique
   */
  export type PlanDailyStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlanDailyStatus to fetch.
     */
    where: PlanDailyStatusWhereUniqueInput
  }

  /**
   * PlanDailyStatus findUniqueOrThrow
   */
  export type PlanDailyStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlanDailyStatus to fetch.
     */
    where: PlanDailyStatusWhereUniqueInput
  }

  /**
   * PlanDailyStatus findFirst
   */
  export type PlanDailyStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlanDailyStatus to fetch.
     */
    where?: PlanDailyStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDailyStatuses to fetch.
     */
    orderBy?: PlanDailyStatusOrderByWithRelationInput | PlanDailyStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanDailyStatuses.
     */
    cursor?: PlanDailyStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDailyStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDailyStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanDailyStatuses.
     */
    distinct?: PlanDailyStatusScalarFieldEnum | PlanDailyStatusScalarFieldEnum[]
  }

  /**
   * PlanDailyStatus findFirstOrThrow
   */
  export type PlanDailyStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlanDailyStatus to fetch.
     */
    where?: PlanDailyStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDailyStatuses to fetch.
     */
    orderBy?: PlanDailyStatusOrderByWithRelationInput | PlanDailyStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanDailyStatuses.
     */
    cursor?: PlanDailyStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDailyStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDailyStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanDailyStatuses.
     */
    distinct?: PlanDailyStatusScalarFieldEnum | PlanDailyStatusScalarFieldEnum[]
  }

  /**
   * PlanDailyStatus findMany
   */
  export type PlanDailyStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlanDailyStatuses to fetch.
     */
    where?: PlanDailyStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDailyStatuses to fetch.
     */
    orderBy?: PlanDailyStatusOrderByWithRelationInput | PlanDailyStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanDailyStatuses.
     */
    cursor?: PlanDailyStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDailyStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDailyStatuses.
     */
    skip?: number
    distinct?: PlanDailyStatusScalarFieldEnum | PlanDailyStatusScalarFieldEnum[]
  }

  /**
   * PlanDailyStatus create
   */
  export type PlanDailyStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanDailyStatus.
     */
    data: XOR<PlanDailyStatusCreateInput, PlanDailyStatusUncheckedCreateInput>
  }

  /**
   * PlanDailyStatus createMany
   */
  export type PlanDailyStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanDailyStatuses.
     */
    data: PlanDailyStatusCreateManyInput | PlanDailyStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanDailyStatus createManyAndReturn
   */
  export type PlanDailyStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * The data used to create many PlanDailyStatuses.
     */
    data: PlanDailyStatusCreateManyInput | PlanDailyStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanDailyStatus update
   */
  export type PlanDailyStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanDailyStatus.
     */
    data: XOR<PlanDailyStatusUpdateInput, PlanDailyStatusUncheckedUpdateInput>
    /**
     * Choose, which PlanDailyStatus to update.
     */
    where: PlanDailyStatusWhereUniqueInput
  }

  /**
   * PlanDailyStatus updateMany
   */
  export type PlanDailyStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanDailyStatuses.
     */
    data: XOR<PlanDailyStatusUpdateManyMutationInput, PlanDailyStatusUncheckedUpdateManyInput>
    /**
     * Filter which PlanDailyStatuses to update
     */
    where?: PlanDailyStatusWhereInput
    /**
     * Limit how many PlanDailyStatuses to update.
     */
    limit?: number
  }

  /**
   * PlanDailyStatus updateManyAndReturn
   */
  export type PlanDailyStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * The data used to update PlanDailyStatuses.
     */
    data: XOR<PlanDailyStatusUpdateManyMutationInput, PlanDailyStatusUncheckedUpdateManyInput>
    /**
     * Filter which PlanDailyStatuses to update
     */
    where?: PlanDailyStatusWhereInput
    /**
     * Limit how many PlanDailyStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanDailyStatus upsert
   */
  export type PlanDailyStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanDailyStatus to update in case it exists.
     */
    where: PlanDailyStatusWhereUniqueInput
    /**
     * In case the PlanDailyStatus found by the `where` argument doesn't exist, create a new PlanDailyStatus with this data.
     */
    create: XOR<PlanDailyStatusCreateInput, PlanDailyStatusUncheckedCreateInput>
    /**
     * In case the PlanDailyStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanDailyStatusUpdateInput, PlanDailyStatusUncheckedUpdateInput>
  }

  /**
   * PlanDailyStatus delete
   */
  export type PlanDailyStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
    /**
     * Filter which PlanDailyStatus to delete.
     */
    where: PlanDailyStatusWhereUniqueInput
  }

  /**
   * PlanDailyStatus deleteMany
   */
  export type PlanDailyStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanDailyStatuses to delete
     */
    where?: PlanDailyStatusWhereInput
    /**
     * Limit how many PlanDailyStatuses to delete.
     */
    limit?: number
  }

  /**
   * PlanDailyStatus without action
   */
  export type PlanDailyStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDailyStatus
     */
    select?: PlanDailyStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDailyStatus
     */
    omit?: PlanDailyStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDailyStatusInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    completionCriteria: string | null
    status: $Enums.MilestoneStatus | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    completionCriteria: string | null
    status: $Enums.MilestoneStatus | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    title: number
    description: number
    dueDate: number
    completionCriteria: number
    status: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type MilestoneMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    title?: true
    description?: true
    dueDate?: true
    completionCriteria?: true
    status?: true
    createdAt?: true
    completedAt?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    title?: true
    description?: true
    dueDate?: true
    completionCriteria?: true
    status?: true
    createdAt?: true
    completedAt?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    title?: true
    description?: true
    dueDate?: true
    completionCriteria?: true
    status?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    userId: string
    planId: string | null
    title: string
    description: string | null
    dueDate: Date | null
    completionCriteria: string | null
    status: $Enums.MilestoneStatus
    createdAt: Date
    completedAt: Date | null
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    completionCriteria?: boolean
    status?: boolean
    createdAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Milestone$planArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    completionCriteria?: boolean
    status?: boolean
    createdAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Milestone$planArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    completionCriteria?: boolean
    status?: boolean
    createdAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Milestone$planArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    completionCriteria?: boolean
    status?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "title" | "description" | "dueDate" | "completionCriteria" | "status" | "createdAt" | "completedAt", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Milestone$planArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Milestone$planArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Milestone$planArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$StudyPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string | null
      title: string
      description: string | null
      dueDate: Date | null
      completionCriteria: string | null
      status: $Enums.MilestoneStatus
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends Milestone$planArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$planArgs<ExtArgs>>): Prisma__StudyPlanClient<$Result.GetResult<Prisma.$StudyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly userId: FieldRef<"Milestone", 'String'>
    readonly planId: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly dueDate: FieldRef<"Milestone", 'DateTime'>
    readonly completionCriteria: FieldRef<"Milestone", 'String'>
    readonly status: FieldRef<"Milestone", 'MilestoneStatus'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly completedAt: FieldRef<"Milestone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone.plan
   */
  export type Milestone$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyPlan
     */
    select?: StudyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyPlan
     */
    omit?: StudyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyPlanInclude<ExtArgs> | null
    where?: StudyPlanWhereInput
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model QuizQuestion
   */

  export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  export type QuizQuestionAvgAggregateOutputType = {
    difficulty: number | null
  }

  export type QuizQuestionSumAggregateOutputType = {
    difficulty: number | null
  }

  export type QuizQuestionMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    userId: string | null
    questionText: string | null
    questionType: $Enums.QuestionType | null
    difficulty: number | null
    correctAnswer: string | null
    explanation: string | null
    createdAt: Date | null
    aiGenerated: boolean | null
  }

  export type QuizQuestionMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    userId: string | null
    questionText: string | null
    questionType: $Enums.QuestionType | null
    difficulty: number | null
    correctAnswer: string | null
    explanation: string | null
    createdAt: Date | null
    aiGenerated: boolean | null
  }

  export type QuizQuestionCountAggregateOutputType = {
    id: number
    subjectId: number
    userId: number
    questionText: number
    questionType: number
    difficulty: number
    options: number
    correctAnswer: number
    explanation: number
    createdAt: number
    aiGenerated: number
    _all: number
  }


  export type QuizQuestionAvgAggregateInputType = {
    difficulty?: true
  }

  export type QuizQuestionSumAggregateInputType = {
    difficulty?: true
  }

  export type QuizQuestionMinAggregateInputType = {
    id?: true
    subjectId?: true
    userId?: true
    questionText?: true
    questionType?: true
    difficulty?: true
    correctAnswer?: true
    explanation?: true
    createdAt?: true
    aiGenerated?: true
  }

  export type QuizQuestionMaxAggregateInputType = {
    id?: true
    subjectId?: true
    userId?: true
    questionText?: true
    questionType?: true
    difficulty?: true
    correctAnswer?: true
    explanation?: true
    createdAt?: true
    aiGenerated?: true
  }

  export type QuizQuestionCountAggregateInputType = {
    id?: true
    subjectId?: true
    userId?: true
    questionText?: true
    questionType?: true
    difficulty?: true
    options?: true
    correctAnswer?: true
    explanation?: true
    createdAt?: true
    aiGenerated?: true
    _all?: true
  }

  export type QuizQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestion to aggregate.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestions
    **/
    _count?: true | QuizQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestion[P]>
      : GetScalarType<T[P], AggregateQuizQuestion[P]>
  }




  export type QuizQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithAggregationInput | QuizQuestionOrderByWithAggregationInput[]
    by: QuizQuestionScalarFieldEnum[] | QuizQuestionScalarFieldEnum
    having?: QuizQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionCountAggregateInputType | true
    _avg?: QuizQuestionAvgAggregateInputType
    _sum?: QuizQuestionSumAggregateInputType
    _min?: QuizQuestionMinAggregateInputType
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type QuizQuestionGroupByOutputType = {
    id: string
    subjectId: string
    userId: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty: number
    options: JsonValue | null
    correctAnswer: string
    explanation: string | null
    createdAt: Date
    aiGenerated: boolean
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    userId?: boolean
    questionText?: boolean
    questionType?: boolean
    difficulty?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    aiGenerated?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    quizAttemptQuestions?: boolean | QuizQuestion$quizAttemptQuestionsArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    userId?: boolean
    questionText?: boolean
    questionType?: boolean
    difficulty?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    aiGenerated?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    userId?: boolean
    questionText?: boolean
    questionType?: boolean
    difficulty?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    aiGenerated?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectScalar = {
    id?: boolean
    subjectId?: boolean
    userId?: boolean
    questionText?: boolean
    questionType?: boolean
    difficulty?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    aiGenerated?: boolean
  }

  export type QuizQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectId" | "userId" | "questionText" | "questionType" | "difficulty" | "options" | "correctAnswer" | "explanation" | "createdAt" | "aiGenerated", ExtArgs["result"]["quizQuestion"]>
  export type QuizQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    quizAttemptQuestions?: boolean | QuizQuestion$quizAttemptQuestionsArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type QuizQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $QuizQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestion"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      quizAttemptQuestions: Prisma.$QuizAttemptQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      userId: string | null
      questionText: string
      questionType: $Enums.QuestionType
      difficulty: number
      options: Prisma.JsonValue | null
      correctAnswer: string
      explanation: string | null
      createdAt: Date
      aiGenerated: boolean
    }, ExtArgs["result"]["quizQuestion"]>
    composites: {}
  }

  type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionPayload, S>

  type QuizQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionCountAggregateInputType | true
    }

  export interface QuizQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'], meta: { name: 'QuizQuestion' } }
    /**
     * Find zero or one QuizQuestion that matches the filter.
     * @param {QuizQuestionFindUniqueArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany()
     * 
     * // Get first 10 QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizQuestionFindManyArgs>(args?: SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestion.
     * @param {QuizQuestionCreateArgs} args - Arguments to create a QuizQuestion.
     * @example
     * // Create one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.create({
     *   data: {
     *     // ... data to create a QuizQuestion
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionCreateArgs>(args: SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestions.
     * @param {QuizQuestionCreateManyArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionCreateManyArgs>(args?: SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizQuestions and returns the data saved in the database.
     * @param {QuizQuestionCreateManyAndReturnArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizQuestion.
     * @param {QuizQuestionDeleteArgs} args - Arguments to delete one QuizQuestion.
     * @example
     * // Delete one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestion
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionDeleteArgs>(args: SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestion.
     * @param {QuizQuestionUpdateArgs} args - Arguments to update one QuizQuestion.
     * @example
     * // Update one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionUpdateArgs>(args: SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestions.
     * @param {QuizQuestionDeleteManyArgs} args - Arguments to filter QuizQuestions to delete.
     * @example
     * // Delete a few QuizQuestions
     * const { count } = await prisma.quizQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions and returns the data updated in the database.
     * @param {QuizQuestionUpdateManyAndReturnArgs} args - Arguments to update many QuizQuestions.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizQuestion.
     * @param {QuizQuestionUpsertArgs} args - Arguments to update or create a QuizQuestion.
     * @example
     * // Update or create a QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.upsert({
     *   create: {
     *     // ... data to create a QuizQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestion we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionUpsertArgs>(args: SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionCountArgs} args - Arguments to filter QuizQuestions to count.
     * @example
     * // Count the number of QuizQuestions
     * const count = await prisma.quizQuestion.count({
     *   where: {
     *     // ... the filter for the QuizQuestions we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionCountArgs>(
      args?: Subset<T, QuizQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizQuestionAggregateArgs>(args: Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>

    /**
     * Group by QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestion model
   */
  readonly fields: QuizQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizAttemptQuestions<T extends QuizQuestion$quizAttemptQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$quizAttemptQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizQuestion model
   */
  interface QuizQuestionFieldRefs {
    readonly id: FieldRef<"QuizQuestion", 'String'>
    readonly subjectId: FieldRef<"QuizQuestion", 'String'>
    readonly userId: FieldRef<"QuizQuestion", 'String'>
    readonly questionText: FieldRef<"QuizQuestion", 'String'>
    readonly questionType: FieldRef<"QuizQuestion", 'QuestionType'>
    readonly difficulty: FieldRef<"QuizQuestion", 'Int'>
    readonly options: FieldRef<"QuizQuestion", 'Json'>
    readonly correctAnswer: FieldRef<"QuizQuestion", 'String'>
    readonly explanation: FieldRef<"QuizQuestion", 'String'>
    readonly createdAt: FieldRef<"QuizQuestion", 'DateTime'>
    readonly aiGenerated: FieldRef<"QuizQuestion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestion findUnique
   */
  export type QuizQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findUniqueOrThrow
   */
  export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findFirst
   */
  export type QuizQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findFirstOrThrow
   */
  export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findMany
   */
  export type QuizQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestions to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion create
   */
  export type QuizQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestion.
     */
    data: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
  }

  /**
   * QuizQuestion createMany
   */
  export type QuizQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizQuestion createManyAndReturn
   */
  export type QuizQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestion update
   */
  export type QuizQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestion.
     */
    data: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestion to update.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion updateMany
   */
  export type QuizQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizQuestion updateManyAndReturn
   */
  export type QuizQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestion upsert
   */
  export type QuizQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestion to update in case it exists.
     */
    where: QuizQuestionWhereUniqueInput
    /**
     * In case the QuizQuestion found by the `where` argument doesn't exist, create a new QuizQuestion with this data.
     */
    create: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
    /**
     * In case the QuizQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
  }

  /**
   * QuizQuestion delete
   */
  export type QuizQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter which QuizQuestion to delete.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion deleteMany
   */
  export type QuizQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestions to delete
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestion.quizAttemptQuestions
   */
  export type QuizQuestion$quizAttemptQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    where?: QuizAttemptQuestionWhereInput
    orderBy?: QuizAttemptQuestionOrderByWithRelationInput | QuizAttemptQuestionOrderByWithRelationInput[]
    cursor?: QuizAttemptQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptQuestionScalarFieldEnum | QuizAttemptQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion without action
   */
  export type QuizQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    totalQuestions: number | null
    correctAnswers: number | null
    scorePercentage: Decimal | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    totalQuestions: number | null
    correctAnswers: number | null
    scorePercentage: Decimal | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    startTime: Date | null
    endTime: Date | null
    totalQuestions: number | null
    correctAnswers: number | null
    scorePercentage: Decimal | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subjectId: string | null
    startTime: Date | null
    endTime: Date | null
    totalQuestions: number | null
    correctAnswers: number | null
    scorePercentage: Decimal | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    id: number
    userId: number
    subjectId: number
    startTime: number
    endTime: number
    totalQuestions: number
    correctAnswers: number
    scorePercentage: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    totalQuestions?: true
    correctAnswers?: true
    scorePercentage?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    totalQuestions?: true
    correctAnswers?: true
    scorePercentage?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    startTime?: true
    endTime?: true
    totalQuestions?: true
    correctAnswers?: true
    scorePercentage?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    startTime?: true
    endTime?: true
    totalQuestions?: true
    correctAnswers?: true
    scorePercentage?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    subjectId?: true
    startTime?: true
    endTime?: true
    totalQuestions?: true
    correctAnswers?: true
    scorePercentage?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    id: string
    userId: string
    subjectId: string
    startTime: Date
    endTime: Date | null
    totalQuestions: number
    correctAnswers: number
    scorePercentage: Decimal
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    scorePercentage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quizAttemptQuestions?: boolean | QuizAttempt$quizAttemptQuestionsArgs<ExtArgs>
    _count?: boolean | QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    scorePercentage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    scorePercentage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    subjectId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    scorePercentage?: boolean
  }

  export type QuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subjectId" | "startTime" | "endTime" | "totalQuestions" | "correctAnswers" | "scorePercentage", ExtArgs["result"]["quizAttempt"]>
  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quizAttemptQuestions?: boolean | QuizAttempt$quizAttemptQuestionsArgs<ExtArgs>
    _count?: boolean | QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quizAttemptQuestions: Prisma.$QuizAttemptQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subjectId: string
      startTime: Date
      endTime: Date | null
      totalQuestions: number
      correctAnswers: number
      scorePercentage: Prisma.Decimal
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }

  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAttemptFindManyArgs>(args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptCreateArgs>(args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttempts.
     * @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptCreateManyArgs>(args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAttempts and returns the data saved in the database.
     * @param {QuizAttemptCreateManyAndReturnArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptDeleteArgs>(args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptUpdateArgs>(args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts and returns the data updated in the database.
     * @param {QuizAttemptUpdateManyAndReturnArgs} args - Arguments to update many QuizAttempts.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptUpsertArgs>(args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizAttemptQuestions<T extends QuizAttempt$quizAttemptQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizAttempt$quizAttemptQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizAttempt model
   */
  interface QuizAttemptFieldRefs {
    readonly id: FieldRef<"QuizAttempt", 'String'>
    readonly userId: FieldRef<"QuizAttempt", 'String'>
    readonly subjectId: FieldRef<"QuizAttempt", 'String'>
    readonly startTime: FieldRef<"QuizAttempt", 'DateTime'>
    readonly endTime: FieldRef<"QuizAttempt", 'DateTime'>
    readonly totalQuestions: FieldRef<"QuizAttempt", 'Int'>
    readonly correctAnswers: FieldRef<"QuizAttempt", 'Int'>
    readonly scorePercentage: FieldRef<"QuizAttempt", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }

  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizAttempt createManyAndReturn
   */
  export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
  }

  /**
   * QuizAttempt updateManyAndReturn
   */
  export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }

  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * QuizAttempt.quizAttemptQuestions
   */
  export type QuizAttempt$quizAttemptQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    where?: QuizAttemptQuestionWhereInput
    orderBy?: QuizAttemptQuestionOrderByWithRelationInput | QuizAttemptQuestionOrderByWithRelationInput[]
    cursor?: QuizAttemptQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptQuestionScalarFieldEnum | QuizAttemptQuestionScalarFieldEnum[]
  }

  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttemptQuestion
   */

  export type AggregateQuizAttemptQuestion = {
    _count: QuizAttemptQuestionCountAggregateOutputType | null
    _min: QuizAttemptQuestionMinAggregateOutputType | null
    _max: QuizAttemptQuestionMaxAggregateOutputType | null
  }

  export type QuizAttemptQuestionMinAggregateOutputType = {
    id: string | null
    quizAttemptId: string | null
    questionId: string | null
    userAnswer: string | null
    isCorrect: boolean | null
  }

  export type QuizAttemptQuestionMaxAggregateOutputType = {
    id: string | null
    quizAttemptId: string | null
    questionId: string | null
    userAnswer: string | null
    isCorrect: boolean | null
  }

  export type QuizAttemptQuestionCountAggregateOutputType = {
    id: number
    quizAttemptId: number
    questionId: number
    userAnswer: number
    isCorrect: number
    _all: number
  }


  export type QuizAttemptQuestionMinAggregateInputType = {
    id?: true
    quizAttemptId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
  }

  export type QuizAttemptQuestionMaxAggregateInputType = {
    id?: true
    quizAttemptId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
  }

  export type QuizAttemptQuestionCountAggregateInputType = {
    id?: true
    quizAttemptId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
    _all?: true
  }

  export type QuizAttemptQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttemptQuestion to aggregate.
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttemptQuestions to fetch.
     */
    orderBy?: QuizAttemptQuestionOrderByWithRelationInput | QuizAttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttemptQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttemptQuestions
    **/
    _count?: true | QuizAttemptQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptQuestionMaxAggregateInputType
  }

  export type GetQuizAttemptQuestionAggregateType<T extends QuizAttemptQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttemptQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttemptQuestion[P]>
      : GetScalarType<T[P], AggregateQuizAttemptQuestion[P]>
  }




  export type QuizAttemptQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptQuestionWhereInput
    orderBy?: QuizAttemptQuestionOrderByWithAggregationInput | QuizAttemptQuestionOrderByWithAggregationInput[]
    by: QuizAttemptQuestionScalarFieldEnum[] | QuizAttemptQuestionScalarFieldEnum
    having?: QuizAttemptQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptQuestionCountAggregateInputType | true
    _min?: QuizAttemptQuestionMinAggregateInputType
    _max?: QuizAttemptQuestionMaxAggregateInputType
  }

  export type QuizAttemptQuestionGroupByOutputType = {
    id: string
    quizAttemptId: string
    questionId: string
    userAnswer: string | null
    isCorrect: boolean | null
    _count: QuizAttemptQuestionCountAggregateOutputType | null
    _min: QuizAttemptQuestionMinAggregateOutputType | null
    _max: QuizAttemptQuestionMaxAggregateOutputType | null
  }

  type GetQuizAttemptQuestionGroupByPayload<T extends QuizAttemptQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptQuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizAttemptId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttemptQuestion"]>

  export type QuizAttemptQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizAttemptId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttemptQuestion"]>

  export type QuizAttemptQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizAttemptId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttemptQuestion"]>

  export type QuizAttemptQuestionSelectScalar = {
    id?: boolean
    quizAttemptId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
  }

  export type QuizAttemptQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizAttemptId" | "questionId" | "userAnswer" | "isCorrect", ExtArgs["result"]["quizAttemptQuestion"]>
  export type QuizAttemptQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }
  export type QuizAttemptQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }
  export type QuizAttemptQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttemptQuestion"
    objects: {
      quizAttempt: Prisma.$QuizAttemptPayload<ExtArgs>
      question: Prisma.$QuizQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizAttemptId: string
      questionId: string
      userAnswer: string | null
      isCorrect: boolean | null
    }, ExtArgs["result"]["quizAttemptQuestion"]>
    composites: {}
  }

  type QuizAttemptQuestionGetPayload<S extends boolean | null | undefined | QuizAttemptQuestionDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptQuestionPayload, S>

  type QuizAttemptQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptQuestionCountAggregateInputType | true
    }

  export interface QuizAttemptQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttemptQuestion'], meta: { name: 'QuizAttemptQuestion' } }
    /**
     * Find zero or one QuizAttemptQuestion that matches the filter.
     * @param {QuizAttemptQuestionFindUniqueArgs} args - Arguments to find a QuizAttemptQuestion
     * @example
     * // Get one QuizAttemptQuestion
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptQuestionFindUniqueArgs>(args: SelectSubset<T, QuizAttemptQuestionFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttemptQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptQuestionFindUniqueOrThrowArgs} args - Arguments to find a QuizAttemptQuestion
     * @example
     * // Get one QuizAttemptQuestion
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttemptQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionFindFirstArgs} args - Arguments to find a QuizAttemptQuestion
     * @example
     * // Get one QuizAttemptQuestion
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptQuestionFindFirstArgs>(args?: SelectSubset<T, QuizAttemptQuestionFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttemptQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionFindFirstOrThrowArgs} args - Arguments to find a QuizAttemptQuestion
     * @example
     * // Get one QuizAttemptQuestion
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttemptQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttemptQuestions
     * const quizAttemptQuestions = await prisma.quizAttemptQuestion.findMany()
     * 
     * // Get first 10 QuizAttemptQuestions
     * const quizAttemptQuestions = await prisma.quizAttemptQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptQuestionWithIdOnly = await prisma.quizAttemptQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAttemptQuestionFindManyArgs>(args?: SelectSubset<T, QuizAttemptQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttemptQuestion.
     * @param {QuizAttemptQuestionCreateArgs} args - Arguments to create a QuizAttemptQuestion.
     * @example
     * // Create one QuizAttemptQuestion
     * const QuizAttemptQuestion = await prisma.quizAttemptQuestion.create({
     *   data: {
     *     // ... data to create a QuizAttemptQuestion
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptQuestionCreateArgs>(args: SelectSubset<T, QuizAttemptQuestionCreateArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttemptQuestions.
     * @param {QuizAttemptQuestionCreateManyArgs} args - Arguments to create many QuizAttemptQuestions.
     * @example
     * // Create many QuizAttemptQuestions
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptQuestionCreateManyArgs>(args?: SelectSubset<T, QuizAttemptQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAttemptQuestions and returns the data saved in the database.
     * @param {QuizAttemptQuestionCreateManyAndReturnArgs} args - Arguments to create many QuizAttemptQuestions.
     * @example
     * // Create many QuizAttemptQuestions
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAttemptQuestions and only return the `id`
     * const quizAttemptQuestionWithIdOnly = await prisma.quizAttemptQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAttemptQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAttemptQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAttemptQuestion.
     * @param {QuizAttemptQuestionDeleteArgs} args - Arguments to delete one QuizAttemptQuestion.
     * @example
     * // Delete one QuizAttemptQuestion
     * const QuizAttemptQuestion = await prisma.quizAttemptQuestion.delete({
     *   where: {
     *     // ... filter to delete one QuizAttemptQuestion
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptQuestionDeleteArgs>(args: SelectSubset<T, QuizAttemptQuestionDeleteArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttemptQuestion.
     * @param {QuizAttemptQuestionUpdateArgs} args - Arguments to update one QuizAttemptQuestion.
     * @example
     * // Update one QuizAttemptQuestion
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptQuestionUpdateArgs>(args: SelectSubset<T, QuizAttemptQuestionUpdateArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttemptQuestions.
     * @param {QuizAttemptQuestionDeleteManyArgs} args - Arguments to filter QuizAttemptQuestions to delete.
     * @example
     * // Delete a few QuizAttemptQuestions
     * const { count } = await prisma.quizAttemptQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptQuestionDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttemptQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttemptQuestions
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptQuestionUpdateManyArgs>(args: SelectSubset<T, QuizAttemptQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttemptQuestions and returns the data updated in the database.
     * @param {QuizAttemptQuestionUpdateManyAndReturnArgs} args - Arguments to update many QuizAttemptQuestions.
     * @example
     * // Update many QuizAttemptQuestions
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAttemptQuestions and only return the `id`
     * const quizAttemptQuestionWithIdOnly = await prisma.quizAttemptQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizAttemptQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAttemptQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAttemptQuestion.
     * @param {QuizAttemptQuestionUpsertArgs} args - Arguments to update or create a QuizAttemptQuestion.
     * @example
     * // Update or create a QuizAttemptQuestion
     * const quizAttemptQuestion = await prisma.quizAttemptQuestion.upsert({
     *   create: {
     *     // ... data to create a QuizAttemptQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttemptQuestion we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptQuestionUpsertArgs>(args: SelectSubset<T, QuizAttemptQuestionUpsertArgs<ExtArgs>>): Prisma__QuizAttemptQuestionClient<$Result.GetResult<Prisma.$QuizAttemptQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAttemptQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionCountArgs} args - Arguments to filter QuizAttemptQuestions to count.
     * @example
     * // Count the number of QuizAttemptQuestions
     * const count = await prisma.quizAttemptQuestion.count({
     *   where: {
     *     // ... the filter for the QuizAttemptQuestions we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptQuestionCountArgs>(
      args?: Subset<T, QuizAttemptQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttemptQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAttemptQuestionAggregateArgs>(args: Subset<T, QuizAttemptQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptQuestionAggregateType<T>>

    /**
     * Group by QuizAttemptQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizAttemptQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptQuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizAttemptQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttemptQuestion model
   */
  readonly fields: QuizAttemptQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttemptQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizAttempt<T extends QuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizAttemptDefaultArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizAttemptQuestion model
   */
  interface QuizAttemptQuestionFieldRefs {
    readonly id: FieldRef<"QuizAttemptQuestion", 'String'>
    readonly quizAttemptId: FieldRef<"QuizAttemptQuestion", 'String'>
    readonly questionId: FieldRef<"QuizAttemptQuestion", 'String'>
    readonly userAnswer: FieldRef<"QuizAttemptQuestion", 'String'>
    readonly isCorrect: FieldRef<"QuizAttemptQuestion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttemptQuestion findUnique
   */
  export type QuizAttemptQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttemptQuestion to fetch.
     */
    where: QuizAttemptQuestionWhereUniqueInput
  }

  /**
   * QuizAttemptQuestion findUniqueOrThrow
   */
  export type QuizAttemptQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttemptQuestion to fetch.
     */
    where: QuizAttemptQuestionWhereUniqueInput
  }

  /**
   * QuizAttemptQuestion findFirst
   */
  export type QuizAttemptQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttemptQuestion to fetch.
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttemptQuestions to fetch.
     */
    orderBy?: QuizAttemptQuestionOrderByWithRelationInput | QuizAttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttemptQuestions.
     */
    cursor?: QuizAttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttemptQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttemptQuestions.
     */
    distinct?: QuizAttemptQuestionScalarFieldEnum | QuizAttemptQuestionScalarFieldEnum[]
  }

  /**
   * QuizAttemptQuestion findFirstOrThrow
   */
  export type QuizAttemptQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttemptQuestion to fetch.
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttemptQuestions to fetch.
     */
    orderBy?: QuizAttemptQuestionOrderByWithRelationInput | QuizAttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttemptQuestions.
     */
    cursor?: QuizAttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttemptQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttemptQuestions.
     */
    distinct?: QuizAttemptQuestionScalarFieldEnum | QuizAttemptQuestionScalarFieldEnum[]
  }

  /**
   * QuizAttemptQuestion findMany
   */
  export type QuizAttemptQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttemptQuestions to fetch.
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttemptQuestions to fetch.
     */
    orderBy?: QuizAttemptQuestionOrderByWithRelationInput | QuizAttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttemptQuestions.
     */
    cursor?: QuizAttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttemptQuestions.
     */
    skip?: number
    distinct?: QuizAttemptQuestionScalarFieldEnum | QuizAttemptQuestionScalarFieldEnum[]
  }

  /**
   * QuizAttemptQuestion create
   */
  export type QuizAttemptQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttemptQuestion.
     */
    data: XOR<QuizAttemptQuestionCreateInput, QuizAttemptQuestionUncheckedCreateInput>
  }

  /**
   * QuizAttemptQuestion createMany
   */
  export type QuizAttemptQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttemptQuestions.
     */
    data: QuizAttemptQuestionCreateManyInput | QuizAttemptQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizAttemptQuestion createManyAndReturn
   */
  export type QuizAttemptQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAttemptQuestions.
     */
    data: QuizAttemptQuestionCreateManyInput | QuizAttemptQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttemptQuestion update
   */
  export type QuizAttemptQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttemptQuestion.
     */
    data: XOR<QuizAttemptQuestionUpdateInput, QuizAttemptQuestionUncheckedUpdateInput>
    /**
     * Choose, which QuizAttemptQuestion to update.
     */
    where: QuizAttemptQuestionWhereUniqueInput
  }

  /**
   * QuizAttemptQuestion updateMany
   */
  export type QuizAttemptQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttemptQuestions.
     */
    data: XOR<QuizAttemptQuestionUpdateManyMutationInput, QuizAttemptQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttemptQuestions to update
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * Limit how many QuizAttemptQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizAttemptQuestion updateManyAndReturn
   */
  export type QuizAttemptQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * The data used to update QuizAttemptQuestions.
     */
    data: XOR<QuizAttemptQuestionUpdateManyMutationInput, QuizAttemptQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttemptQuestions to update
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * Limit how many QuizAttemptQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttemptQuestion upsert
   */
  export type QuizAttemptQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttemptQuestion to update in case it exists.
     */
    where: QuizAttemptQuestionWhereUniqueInput
    /**
     * In case the QuizAttemptQuestion found by the `where` argument doesn't exist, create a new QuizAttemptQuestion with this data.
     */
    create: XOR<QuizAttemptQuestionCreateInput, QuizAttemptQuestionUncheckedCreateInput>
    /**
     * In case the QuizAttemptQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptQuestionUpdateInput, QuizAttemptQuestionUncheckedUpdateInput>
  }

  /**
   * QuizAttemptQuestion delete
   */
  export type QuizAttemptQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter which QuizAttemptQuestion to delete.
     */
    where: QuizAttemptQuestionWhereUniqueInput
  }

  /**
   * QuizAttemptQuestion deleteMany
   */
  export type QuizAttemptQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttemptQuestions to delete
     */
    where?: QuizAttemptQuestionWhereInput
    /**
     * Limit how many QuizAttemptQuestions to delete.
     */
    limit?: number
  }

  /**
   * QuizAttemptQuestion without action
   */
  export type QuizAttemptQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptQuestion
     */
    select?: QuizAttemptQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttemptQuestion
     */
    omit?: QuizAttemptQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptQuestionInclude<ExtArgs> | null
  }


  /**
   * Model ProgressTracking
   */

  export type AggregateProgressTracking = {
    _count: ProgressTrackingCountAggregateOutputType | null
    _avg: ProgressTrackingAvgAggregateOutputType | null
    _sum: ProgressTrackingSumAggregateOutputType | null
    _min: ProgressTrackingMinAggregateOutputType | null
    _max: ProgressTrackingMaxAggregateOutputType | null
  }

  export type ProgressTrackingAvgAggregateOutputType = {
    studyMinutes: number | null
    completedSessions: number | null
    missedSessions: number | null
    currentStreak: number | null
    motivationLevel: number | null
  }

  export type ProgressTrackingSumAggregateOutputType = {
    studyMinutes: number | null
    completedSessions: number | null
    missedSessions: number | null
    currentStreak: number | null
    motivationLevel: number | null
  }

  export type ProgressTrackingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    studyMinutes: number | null
    completedSessions: number | null
    missedSessions: number | null
    currentStreak: number | null
    simbiState: string | null
    motivationLevel: number | null
    lastInteraction: Date | null
  }

  export type ProgressTrackingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    studyMinutes: number | null
    completedSessions: number | null
    missedSessions: number | null
    currentStreak: number | null
    simbiState: string | null
    motivationLevel: number | null
    lastInteraction: Date | null
  }

  export type ProgressTrackingCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    studyMinutes: number
    completedSessions: number
    missedSessions: number
    currentStreak: number
    simbiState: number
    motivationLevel: number
    lastInteraction: number
    _all: number
  }


  export type ProgressTrackingAvgAggregateInputType = {
    studyMinutes?: true
    completedSessions?: true
    missedSessions?: true
    currentStreak?: true
    motivationLevel?: true
  }

  export type ProgressTrackingSumAggregateInputType = {
    studyMinutes?: true
    completedSessions?: true
    missedSessions?: true
    currentStreak?: true
    motivationLevel?: true
  }

  export type ProgressTrackingMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    studyMinutes?: true
    completedSessions?: true
    missedSessions?: true
    currentStreak?: true
    simbiState?: true
    motivationLevel?: true
    lastInteraction?: true
  }

  export type ProgressTrackingMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    studyMinutes?: true
    completedSessions?: true
    missedSessions?: true
    currentStreak?: true
    simbiState?: true
    motivationLevel?: true
    lastInteraction?: true
  }

  export type ProgressTrackingCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    studyMinutes?: true
    completedSessions?: true
    missedSessions?: true
    currentStreak?: true
    simbiState?: true
    motivationLevel?: true
    lastInteraction?: true
    _all?: true
  }

  export type ProgressTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressTracking to aggregate.
     */
    where?: ProgressTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressTrackings to fetch.
     */
    orderBy?: ProgressTrackingOrderByWithRelationInput | ProgressTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressTrackings
    **/
    _count?: true | ProgressTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressTrackingMaxAggregateInputType
  }

  export type GetProgressTrackingAggregateType<T extends ProgressTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressTracking[P]>
      : GetScalarType<T[P], AggregateProgressTracking[P]>
  }




  export type ProgressTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressTrackingWhereInput
    orderBy?: ProgressTrackingOrderByWithAggregationInput | ProgressTrackingOrderByWithAggregationInput[]
    by: ProgressTrackingScalarFieldEnum[] | ProgressTrackingScalarFieldEnum
    having?: ProgressTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressTrackingCountAggregateInputType | true
    _avg?: ProgressTrackingAvgAggregateInputType
    _sum?: ProgressTrackingSumAggregateInputType
    _min?: ProgressTrackingMinAggregateInputType
    _max?: ProgressTrackingMaxAggregateInputType
  }

  export type ProgressTrackingGroupByOutputType = {
    id: string
    userId: string
    date: Date
    studyMinutes: number
    completedSessions: number
    missedSessions: number
    currentStreak: number
    simbiState: string
    motivationLevel: number
    lastInteraction: Date | null
    _count: ProgressTrackingCountAggregateOutputType | null
    _avg: ProgressTrackingAvgAggregateOutputType | null
    _sum: ProgressTrackingSumAggregateOutputType | null
    _min: ProgressTrackingMinAggregateOutputType | null
    _max: ProgressTrackingMaxAggregateOutputType | null
  }

  type GetProgressTrackingGroupByPayload<T extends ProgressTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressTrackingGroupByOutputType[P]>
        }
      >
    >


  export type ProgressTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    studyMinutes?: boolean
    completedSessions?: boolean
    missedSessions?: boolean
    currentStreak?: boolean
    simbiState?: boolean
    motivationLevel?: boolean
    lastInteraction?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressTracking"]>

  export type ProgressTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    studyMinutes?: boolean
    completedSessions?: boolean
    missedSessions?: boolean
    currentStreak?: boolean
    simbiState?: boolean
    motivationLevel?: boolean
    lastInteraction?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressTracking"]>

  export type ProgressTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    studyMinutes?: boolean
    completedSessions?: boolean
    missedSessions?: boolean
    currentStreak?: boolean
    simbiState?: boolean
    motivationLevel?: boolean
    lastInteraction?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressTracking"]>

  export type ProgressTrackingSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    studyMinutes?: boolean
    completedSessions?: boolean
    missedSessions?: boolean
    currentStreak?: boolean
    simbiState?: boolean
    motivationLevel?: boolean
    lastInteraction?: boolean
  }

  export type ProgressTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "studyMinutes" | "completedSessions" | "missedSessions" | "currentStreak" | "simbiState" | "motivationLevel" | "lastInteraction", ExtArgs["result"]["progressTracking"]>
  export type ProgressTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressTrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressTracking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      studyMinutes: number
      completedSessions: number
      missedSessions: number
      currentStreak: number
      simbiState: string
      motivationLevel: number
      lastInteraction: Date | null
    }, ExtArgs["result"]["progressTracking"]>
    composites: {}
  }

  type ProgressTrackingGetPayload<S extends boolean | null | undefined | ProgressTrackingDefaultArgs> = $Result.GetResult<Prisma.$ProgressTrackingPayload, S>

  type ProgressTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressTrackingCountAggregateInputType | true
    }

  export interface ProgressTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressTracking'], meta: { name: 'ProgressTracking' } }
    /**
     * Find zero or one ProgressTracking that matches the filter.
     * @param {ProgressTrackingFindUniqueArgs} args - Arguments to find a ProgressTracking
     * @example
     * // Get one ProgressTracking
     * const progressTracking = await prisma.progressTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressTrackingFindUniqueArgs>(args: SelectSubset<T, ProgressTrackingFindUniqueArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressTrackingFindUniqueOrThrowArgs} args - Arguments to find a ProgressTracking
     * @example
     * // Get one ProgressTracking
     * const progressTracking = await prisma.progressTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingFindFirstArgs} args - Arguments to find a ProgressTracking
     * @example
     * // Get one ProgressTracking
     * const progressTracking = await prisma.progressTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressTrackingFindFirstArgs>(args?: SelectSubset<T, ProgressTrackingFindFirstArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingFindFirstOrThrowArgs} args - Arguments to find a ProgressTracking
     * @example
     * // Get one ProgressTracking
     * const progressTracking = await prisma.progressTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressTrackings
     * const progressTrackings = await prisma.progressTracking.findMany()
     * 
     * // Get first 10 ProgressTrackings
     * const progressTrackings = await prisma.progressTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressTrackingWithIdOnly = await prisma.progressTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressTrackingFindManyArgs>(args?: SelectSubset<T, ProgressTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressTracking.
     * @param {ProgressTrackingCreateArgs} args - Arguments to create a ProgressTracking.
     * @example
     * // Create one ProgressTracking
     * const ProgressTracking = await prisma.progressTracking.create({
     *   data: {
     *     // ... data to create a ProgressTracking
     *   }
     * })
     * 
     */
    create<T extends ProgressTrackingCreateArgs>(args: SelectSubset<T, ProgressTrackingCreateArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressTrackings.
     * @param {ProgressTrackingCreateManyArgs} args - Arguments to create many ProgressTrackings.
     * @example
     * // Create many ProgressTrackings
     * const progressTracking = await prisma.progressTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressTrackingCreateManyArgs>(args?: SelectSubset<T, ProgressTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressTrackings and returns the data saved in the database.
     * @param {ProgressTrackingCreateManyAndReturnArgs} args - Arguments to create many ProgressTrackings.
     * @example
     * // Create many ProgressTrackings
     * const progressTracking = await prisma.progressTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressTrackings and only return the `id`
     * const progressTrackingWithIdOnly = await prisma.progressTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressTracking.
     * @param {ProgressTrackingDeleteArgs} args - Arguments to delete one ProgressTracking.
     * @example
     * // Delete one ProgressTracking
     * const ProgressTracking = await prisma.progressTracking.delete({
     *   where: {
     *     // ... filter to delete one ProgressTracking
     *   }
     * })
     * 
     */
    delete<T extends ProgressTrackingDeleteArgs>(args: SelectSubset<T, ProgressTrackingDeleteArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressTracking.
     * @param {ProgressTrackingUpdateArgs} args - Arguments to update one ProgressTracking.
     * @example
     * // Update one ProgressTracking
     * const progressTracking = await prisma.progressTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressTrackingUpdateArgs>(args: SelectSubset<T, ProgressTrackingUpdateArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressTrackings.
     * @param {ProgressTrackingDeleteManyArgs} args - Arguments to filter ProgressTrackings to delete.
     * @example
     * // Delete a few ProgressTrackings
     * const { count } = await prisma.progressTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressTrackingDeleteManyArgs>(args?: SelectSubset<T, ProgressTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressTrackings
     * const progressTracking = await prisma.progressTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressTrackingUpdateManyArgs>(args: SelectSubset<T, ProgressTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressTrackings and returns the data updated in the database.
     * @param {ProgressTrackingUpdateManyAndReturnArgs} args - Arguments to update many ProgressTrackings.
     * @example
     * // Update many ProgressTrackings
     * const progressTracking = await prisma.progressTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressTrackings and only return the `id`
     * const progressTrackingWithIdOnly = await prisma.progressTracking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressTracking.
     * @param {ProgressTrackingUpsertArgs} args - Arguments to update or create a ProgressTracking.
     * @example
     * // Update or create a ProgressTracking
     * const progressTracking = await prisma.progressTracking.upsert({
     *   create: {
     *     // ... data to create a ProgressTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressTracking we want to update
     *   }
     * })
     */
    upsert<T extends ProgressTrackingUpsertArgs>(args: SelectSubset<T, ProgressTrackingUpsertArgs<ExtArgs>>): Prisma__ProgressTrackingClient<$Result.GetResult<Prisma.$ProgressTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingCountArgs} args - Arguments to filter ProgressTrackings to count.
     * @example
     * // Count the number of ProgressTrackings
     * const count = await prisma.progressTracking.count({
     *   where: {
     *     // ... the filter for the ProgressTrackings we want to count
     *   }
     * })
    **/
    count<T extends ProgressTrackingCountArgs>(
      args?: Subset<T, ProgressTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressTrackingAggregateArgs>(args: Subset<T, ProgressTrackingAggregateArgs>): Prisma.PrismaPromise<GetProgressTrackingAggregateType<T>>

    /**
     * Group by ProgressTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressTrackingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgressTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressTrackingGroupByArgs['orderBy'] }
        : { orderBy?: ProgressTrackingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgressTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressTracking model
   */
  readonly fields: ProgressTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressTracking model
   */
  interface ProgressTrackingFieldRefs {
    readonly id: FieldRef<"ProgressTracking", 'String'>
    readonly userId: FieldRef<"ProgressTracking", 'String'>
    readonly date: FieldRef<"ProgressTracking", 'DateTime'>
    readonly studyMinutes: FieldRef<"ProgressTracking", 'Int'>
    readonly completedSessions: FieldRef<"ProgressTracking", 'Int'>
    readonly missedSessions: FieldRef<"ProgressTracking", 'Int'>
    readonly currentStreak: FieldRef<"ProgressTracking", 'Int'>
    readonly simbiState: FieldRef<"ProgressTracking", 'String'>
    readonly motivationLevel: FieldRef<"ProgressTracking", 'Int'>
    readonly lastInteraction: FieldRef<"ProgressTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressTracking findUnique
   */
  export type ProgressTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ProgressTracking to fetch.
     */
    where: ProgressTrackingWhereUniqueInput
  }

  /**
   * ProgressTracking findUniqueOrThrow
   */
  export type ProgressTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ProgressTracking to fetch.
     */
    where: ProgressTrackingWhereUniqueInput
  }

  /**
   * ProgressTracking findFirst
   */
  export type ProgressTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ProgressTracking to fetch.
     */
    where?: ProgressTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressTrackings to fetch.
     */
    orderBy?: ProgressTrackingOrderByWithRelationInput | ProgressTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressTrackings.
     */
    cursor?: ProgressTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressTrackings.
     */
    distinct?: ProgressTrackingScalarFieldEnum | ProgressTrackingScalarFieldEnum[]
  }

  /**
   * ProgressTracking findFirstOrThrow
   */
  export type ProgressTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ProgressTracking to fetch.
     */
    where?: ProgressTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressTrackings to fetch.
     */
    orderBy?: ProgressTrackingOrderByWithRelationInput | ProgressTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressTrackings.
     */
    cursor?: ProgressTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressTrackings.
     */
    distinct?: ProgressTrackingScalarFieldEnum | ProgressTrackingScalarFieldEnum[]
  }

  /**
   * ProgressTracking findMany
   */
  export type ProgressTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ProgressTrackings to fetch.
     */
    where?: ProgressTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressTrackings to fetch.
     */
    orderBy?: ProgressTrackingOrderByWithRelationInput | ProgressTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressTrackings.
     */
    cursor?: ProgressTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressTrackings.
     */
    skip?: number
    distinct?: ProgressTrackingScalarFieldEnum | ProgressTrackingScalarFieldEnum[]
  }

  /**
   * ProgressTracking create
   */
  export type ProgressTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressTracking.
     */
    data: XOR<ProgressTrackingCreateInput, ProgressTrackingUncheckedCreateInput>
  }

  /**
   * ProgressTracking createMany
   */
  export type ProgressTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressTrackings.
     */
    data: ProgressTrackingCreateManyInput | ProgressTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressTracking createManyAndReturn
   */
  export type ProgressTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressTrackings.
     */
    data: ProgressTrackingCreateManyInput | ProgressTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressTracking update
   */
  export type ProgressTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressTracking.
     */
    data: XOR<ProgressTrackingUpdateInput, ProgressTrackingUncheckedUpdateInput>
    /**
     * Choose, which ProgressTracking to update.
     */
    where: ProgressTrackingWhereUniqueInput
  }

  /**
   * ProgressTracking updateMany
   */
  export type ProgressTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressTrackings.
     */
    data: XOR<ProgressTrackingUpdateManyMutationInput, ProgressTrackingUncheckedUpdateManyInput>
    /**
     * Filter which ProgressTrackings to update
     */
    where?: ProgressTrackingWhereInput
    /**
     * Limit how many ProgressTrackings to update.
     */
    limit?: number
  }

  /**
   * ProgressTracking updateManyAndReturn
   */
  export type ProgressTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * The data used to update ProgressTrackings.
     */
    data: XOR<ProgressTrackingUpdateManyMutationInput, ProgressTrackingUncheckedUpdateManyInput>
    /**
     * Filter which ProgressTrackings to update
     */
    where?: ProgressTrackingWhereInput
    /**
     * Limit how many ProgressTrackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressTracking upsert
   */
  export type ProgressTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressTracking to update in case it exists.
     */
    where: ProgressTrackingWhereUniqueInput
    /**
     * In case the ProgressTracking found by the `where` argument doesn't exist, create a new ProgressTracking with this data.
     */
    create: XOR<ProgressTrackingCreateInput, ProgressTrackingUncheckedCreateInput>
    /**
     * In case the ProgressTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressTrackingUpdateInput, ProgressTrackingUncheckedUpdateInput>
  }

  /**
   * ProgressTracking delete
   */
  export type ProgressTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
    /**
     * Filter which ProgressTracking to delete.
     */
    where: ProgressTrackingWhereUniqueInput
  }

  /**
   * ProgressTracking deleteMany
   */
  export type ProgressTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressTrackings to delete
     */
    where?: ProgressTrackingWhereInput
    /**
     * Limit how many ProgressTrackings to delete.
     */
    limit?: number
  }

  /**
   * ProgressTracking without action
   */
  export type ProgressTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressTracking
     */
    select?: ProgressTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressTracking
     */
    omit?: ProgressTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressTrackingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    educationLevel: 'educationLevel',
    timezone: 'timezone',
    preferredStudyMethod: 'preferredStudyMethod',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    educationLevel: 'educationLevel',
    educationYear: 'educationYear',
    colorCode: 'colorCode',
    difficultyLevel: 'difficultyLevel',
    priority: 'priority',
    createdAt: 'createdAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const StudyPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subjectId: 'subjectId',
    planName: 'planName',
    dailyTargetMinutes: 'dailyTargetMinutes',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    lastUpdated: 'lastUpdated',
    status: 'status'
  };

  export type StudyPlanScalarFieldEnum = (typeof StudyPlanScalarFieldEnum)[keyof typeof StudyPlanScalarFieldEnum]


  export const StudySessionScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    userId: 'userId',
    sessionDate: 'sessionDate',
    startTime: 'startTime',
    endTime: 'endTime',
    durationMinutes: 'durationMinutes',
    notes: 'notes',
    productivityRating: 'productivityRating',
    simbiReaction: 'simbiReaction'
  };

  export type StudySessionScalarFieldEnum = (typeof StudySessionScalarFieldEnum)[keyof typeof StudySessionScalarFieldEnum]


  export const PlanDailyStatusScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    date: 'date',
    totalMinutesStudied: 'totalMinutesStudied',
    targetAchieved: 'targetAchieved',
    status: 'status'
  };

  export type PlanDailyStatusScalarFieldEnum = (typeof PlanDailyStatusScalarFieldEnum)[keyof typeof PlanDailyStatusScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    completionCriteria: 'completionCriteria',
    status: 'status',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const QuizQuestionScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    userId: 'userId',
    questionText: 'questionText',
    questionType: 'questionType',
    difficulty: 'difficulty',
    options: 'options',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation',
    createdAt: 'createdAt',
    aiGenerated: 'aiGenerated'
  };

  export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subjectId: 'subjectId',
    startTime: 'startTime',
    endTime: 'endTime',
    totalQuestions: 'totalQuestions',
    correctAnswers: 'correctAnswers',
    scorePercentage: 'scorePercentage'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const QuizAttemptQuestionScalarFieldEnum: {
    id: 'id',
    quizAttemptId: 'quizAttemptId',
    questionId: 'questionId',
    userAnswer: 'userAnswer',
    isCorrect: 'isCorrect'
  };

  export type QuizAttemptQuestionScalarFieldEnum = (typeof QuizAttemptQuestionScalarFieldEnum)[keyof typeof QuizAttemptQuestionScalarFieldEnum]


  export const ProgressTrackingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    studyMinutes: 'studyMinutes',
    completedSessions: 'completedSessions',
    missedSessions: 'missedSessions',
    currentStreak: 'currentStreak',
    simbiState: 'simbiState',
    motivationLevel: 'motivationLevel',
    lastInteraction: 'lastInteraction'
  };

  export type ProgressTrackingScalarFieldEnum = (typeof ProgressTrackingScalarFieldEnum)[keyof typeof ProgressTrackingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DailyStatus'
   */
  export type EnumDailyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DailyStatus'>
    


  /**
   * Reference to a field of type 'DailyStatus[]'
   */
  export type ListEnumDailyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DailyStatus[]'>
    


  /**
   * Reference to a field of type 'MilestoneStatus'
   */
  export type EnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus'>
    


  /**
   * Reference to a field of type 'MilestoneStatus[]'
   */
  export type ListEnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    educationLevel?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    preferredStudyMethod?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    subjects?: SubjectListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
    studySessions?: StudySessionListRelationFilter
    milestones?: MilestoneListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
    progressTracking?: ProgressTrackingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    preferredStudyMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    subjects?: SubjectOrderByRelationAggregateInput
    studyPlans?: StudyPlanOrderByRelationAggregateInput
    studySessions?: StudySessionOrderByRelationAggregateInput
    milestones?: MilestoneOrderByRelationAggregateInput
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
    progressTracking?: ProgressTrackingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    educationLevel?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    preferredStudyMethod?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    subjects?: SubjectListRelationFilter
    studyPlans?: StudyPlanListRelationFilter
    studySessions?: StudySessionListRelationFilter
    milestones?: MilestoneListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
    progressTracking?: ProgressTrackingListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    preferredStudyMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    educationLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredStudyMethod?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    userId?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    educationLevel?: StringFilter<"Subject"> | string
    educationYear?: IntNullableFilter<"Subject"> | number | null
    colorCode?: StringFilter<"Subject"> | string
    difficultyLevel?: IntFilter<"Subject"> | number
    priority?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studyPlans?: StudyPlanListRelationFilter
    quizQuestions?: QuizQuestionListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    educationLevel?: SortOrder
    educationYear?: SortOrderInput | SortOrder
    colorCode?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    studyPlans?: StudyPlanOrderByRelationAggregateInput
    quizQuestions?: QuizQuestionOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: SubjectUserIdNameCompoundUniqueInput
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    userId?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    educationLevel?: StringFilter<"Subject"> | string
    educationYear?: IntNullableFilter<"Subject"> | number | null
    colorCode?: StringFilter<"Subject"> | string
    difficultyLevel?: IntFilter<"Subject"> | number
    priority?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studyPlans?: StudyPlanListRelationFilter
    quizQuestions?: QuizQuestionListRelationFilter
  }, "id" | "userId_name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    educationLevel?: SortOrder
    educationYear?: SortOrderInput | SortOrder
    colorCode?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    userId?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    educationLevel?: StringWithAggregatesFilter<"Subject"> | string
    educationYear?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    colorCode?: StringWithAggregatesFilter<"Subject"> | string
    difficultyLevel?: IntWithAggregatesFilter<"Subject"> | number
    priority?: IntWithAggregatesFilter<"Subject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type StudyPlanWhereInput = {
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    id?: StringFilter<"StudyPlan"> | string
    userId?: StringFilter<"StudyPlan"> | string
    subjectId?: StringFilter<"StudyPlan"> | string
    planName?: StringFilter<"StudyPlan"> | string
    dailyTargetMinutes?: IntFilter<"StudyPlan"> | number
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    lastUpdated?: DateTimeFilter<"StudyPlan"> | Date | string
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    studySessions?: StudySessionListRelationFilter
    planDailyStatus?: PlanDailyStatusListRelationFilter
    milestones?: MilestoneListRelationFilter
  }

  export type StudyPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    planName?: SortOrder
    dailyTargetMinutes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    studySessions?: StudySessionOrderByRelationAggregateInput
    planDailyStatus?: PlanDailyStatusOrderByRelationAggregateInput
    milestones?: MilestoneOrderByRelationAggregateInput
  }

  export type StudyPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyPlanWhereInput | StudyPlanWhereInput[]
    OR?: StudyPlanWhereInput[]
    NOT?: StudyPlanWhereInput | StudyPlanWhereInput[]
    userId?: StringFilter<"StudyPlan"> | string
    subjectId?: StringFilter<"StudyPlan"> | string
    planName?: StringFilter<"StudyPlan"> | string
    dailyTargetMinutes?: IntFilter<"StudyPlan"> | number
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    lastUpdated?: DateTimeFilter<"StudyPlan"> | Date | string
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    studySessions?: StudySessionListRelationFilter
    planDailyStatus?: PlanDailyStatusListRelationFilter
    milestones?: MilestoneListRelationFilter
  }, "id">

  export type StudyPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    planName?: SortOrder
    dailyTargetMinutes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    _count?: StudyPlanCountOrderByAggregateInput
    _avg?: StudyPlanAvgOrderByAggregateInput
    _max?: StudyPlanMaxOrderByAggregateInput
    _min?: StudyPlanMinOrderByAggregateInput
    _sum?: StudyPlanSumOrderByAggregateInput
  }

  export type StudyPlanScalarWhereWithAggregatesInput = {
    AND?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    OR?: StudyPlanScalarWhereWithAggregatesInput[]
    NOT?: StudyPlanScalarWhereWithAggregatesInput | StudyPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyPlan"> | string
    userId?: StringWithAggregatesFilter<"StudyPlan"> | string
    subjectId?: StringWithAggregatesFilter<"StudyPlan"> | string
    planName?: StringWithAggregatesFilter<"StudyPlan"> | string
    dailyTargetMinutes?: IntWithAggregatesFilter<"StudyPlan"> | number
    startDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    lastUpdated?: DateTimeWithAggregatesFilter<"StudyPlan"> | Date | string
    status?: EnumPlanStatusWithAggregatesFilter<"StudyPlan"> | $Enums.PlanStatus
  }

  export type StudySessionWhereInput = {
    AND?: StudySessionWhereInput | StudySessionWhereInput[]
    OR?: StudySessionWhereInput[]
    NOT?: StudySessionWhereInput | StudySessionWhereInput[]
    id?: StringFilter<"StudySession"> | string
    planId?: StringFilter<"StudySession"> | string
    userId?: StringFilter<"StudySession"> | string
    sessionDate?: DateTimeFilter<"StudySession"> | Date | string
    startTime?: DateTimeFilter<"StudySession"> | Date | string
    endTime?: DateTimeFilter<"StudySession"> | Date | string
    durationMinutes?: IntFilter<"StudySession"> | number
    notes?: StringNullableFilter<"StudySession"> | string | null
    productivityRating?: IntNullableFilter<"StudySession"> | number | null
    simbiReaction?: StringFilter<"StudySession"> | string
    plan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudySessionOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrderInput | SortOrder
    productivityRating?: SortOrderInput | SortOrder
    simbiReaction?: SortOrder
    plan?: StudyPlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StudySessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudySessionWhereInput | StudySessionWhereInput[]
    OR?: StudySessionWhereInput[]
    NOT?: StudySessionWhereInput | StudySessionWhereInput[]
    planId?: StringFilter<"StudySession"> | string
    userId?: StringFilter<"StudySession"> | string
    sessionDate?: DateTimeFilter<"StudySession"> | Date | string
    startTime?: DateTimeFilter<"StudySession"> | Date | string
    endTime?: DateTimeFilter<"StudySession"> | Date | string
    durationMinutes?: IntFilter<"StudySession"> | number
    notes?: StringNullableFilter<"StudySession"> | string | null
    productivityRating?: IntNullableFilter<"StudySession"> | number | null
    simbiReaction?: StringFilter<"StudySession"> | string
    plan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StudySessionOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrderInput | SortOrder
    productivityRating?: SortOrderInput | SortOrder
    simbiReaction?: SortOrder
    _count?: StudySessionCountOrderByAggregateInput
    _avg?: StudySessionAvgOrderByAggregateInput
    _max?: StudySessionMaxOrderByAggregateInput
    _min?: StudySessionMinOrderByAggregateInput
    _sum?: StudySessionSumOrderByAggregateInput
  }

  export type StudySessionScalarWhereWithAggregatesInput = {
    AND?: StudySessionScalarWhereWithAggregatesInput | StudySessionScalarWhereWithAggregatesInput[]
    OR?: StudySessionScalarWhereWithAggregatesInput[]
    NOT?: StudySessionScalarWhereWithAggregatesInput | StudySessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudySession"> | string
    planId?: StringWithAggregatesFilter<"StudySession"> | string
    userId?: StringWithAggregatesFilter<"StudySession"> | string
    sessionDate?: DateTimeWithAggregatesFilter<"StudySession"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"StudySession"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"StudySession"> | Date | string
    durationMinutes?: IntWithAggregatesFilter<"StudySession"> | number
    notes?: StringNullableWithAggregatesFilter<"StudySession"> | string | null
    productivityRating?: IntNullableWithAggregatesFilter<"StudySession"> | number | null
    simbiReaction?: StringWithAggregatesFilter<"StudySession"> | string
  }

  export type PlanDailyStatusWhereInput = {
    AND?: PlanDailyStatusWhereInput | PlanDailyStatusWhereInput[]
    OR?: PlanDailyStatusWhereInput[]
    NOT?: PlanDailyStatusWhereInput | PlanDailyStatusWhereInput[]
    id?: StringFilter<"PlanDailyStatus"> | string
    planId?: StringFilter<"PlanDailyStatus"> | string
    date?: DateTimeFilter<"PlanDailyStatus"> | Date | string
    totalMinutesStudied?: IntFilter<"PlanDailyStatus"> | number
    targetAchieved?: BoolFilter<"PlanDailyStatus"> | boolean
    status?: EnumDailyStatusFilter<"PlanDailyStatus"> | $Enums.DailyStatus
    plan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
  }

  export type PlanDailyStatusOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    totalMinutesStudied?: SortOrder
    targetAchieved?: SortOrder
    status?: SortOrder
    plan?: StudyPlanOrderByWithRelationInput
  }

  export type PlanDailyStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId_date?: PlanDailyStatusPlanIdDateCompoundUniqueInput
    AND?: PlanDailyStatusWhereInput | PlanDailyStatusWhereInput[]
    OR?: PlanDailyStatusWhereInput[]
    NOT?: PlanDailyStatusWhereInput | PlanDailyStatusWhereInput[]
    planId?: StringFilter<"PlanDailyStatus"> | string
    date?: DateTimeFilter<"PlanDailyStatus"> | Date | string
    totalMinutesStudied?: IntFilter<"PlanDailyStatus"> | number
    targetAchieved?: BoolFilter<"PlanDailyStatus"> | boolean
    status?: EnumDailyStatusFilter<"PlanDailyStatus"> | $Enums.DailyStatus
    plan?: XOR<StudyPlanScalarRelationFilter, StudyPlanWhereInput>
  }, "id" | "planId_date">

  export type PlanDailyStatusOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    totalMinutesStudied?: SortOrder
    targetAchieved?: SortOrder
    status?: SortOrder
    _count?: PlanDailyStatusCountOrderByAggregateInput
    _avg?: PlanDailyStatusAvgOrderByAggregateInput
    _max?: PlanDailyStatusMaxOrderByAggregateInput
    _min?: PlanDailyStatusMinOrderByAggregateInput
    _sum?: PlanDailyStatusSumOrderByAggregateInput
  }

  export type PlanDailyStatusScalarWhereWithAggregatesInput = {
    AND?: PlanDailyStatusScalarWhereWithAggregatesInput | PlanDailyStatusScalarWhereWithAggregatesInput[]
    OR?: PlanDailyStatusScalarWhereWithAggregatesInput[]
    NOT?: PlanDailyStatusScalarWhereWithAggregatesInput | PlanDailyStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanDailyStatus"> | string
    planId?: StringWithAggregatesFilter<"PlanDailyStatus"> | string
    date?: DateTimeWithAggregatesFilter<"PlanDailyStatus"> | Date | string
    totalMinutesStudied?: IntWithAggregatesFilter<"PlanDailyStatus"> | number
    targetAchieved?: BoolWithAggregatesFilter<"PlanDailyStatus"> | boolean
    status?: EnumDailyStatusWithAggregatesFilter<"PlanDailyStatus"> | $Enums.DailyStatus
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    userId?: StringFilter<"Milestone"> | string
    planId?: StringNullableFilter<"Milestone"> | string | null
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    completionCriteria?: StringNullableFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    completedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<StudyPlanNullableScalarRelationFilter, StudyPlanWhereInput> | null
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    completionCriteria?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    plan?: StudyPlanOrderByWithRelationInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    userId?: StringFilter<"Milestone"> | string
    planId?: StringNullableFilter<"Milestone"> | string | null
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    completionCriteria?: StringNullableFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    completedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<StudyPlanNullableScalarRelationFilter, StudyPlanWhereInput> | null
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    completionCriteria?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    userId?: StringWithAggregatesFilter<"Milestone"> | string
    planId?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null
    completionCriteria?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusWithAggregatesFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null
  }

  export type QuizQuestionWhereInput = {
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    subjectId?: StringFilter<"QuizQuestion"> | string
    userId?: StringNullableFilter<"QuizQuestion"> | string | null
    questionText?: StringFilter<"QuizQuestion"> | string
    questionType?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    difficulty?: IntFilter<"QuizQuestion"> | number
    options?: JsonNullableFilter<"QuizQuestion">
    correctAnswer?: StringFilter<"QuizQuestion"> | string
    explanation?: StringNullableFilter<"QuizQuestion"> | string | null
    createdAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    aiGenerated?: BoolFilter<"QuizQuestion"> | boolean
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    quizAttemptQuestions?: QuizAttemptQuestionListRelationFilter
  }

  export type QuizQuestionOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    questionText?: SortOrder
    questionType?: SortOrder
    difficulty?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    aiGenerated?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    quizAttemptQuestions?: QuizAttemptQuestionOrderByRelationAggregateInput
  }

  export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    subjectId?: StringFilter<"QuizQuestion"> | string
    userId?: StringNullableFilter<"QuizQuestion"> | string | null
    questionText?: StringFilter<"QuizQuestion"> | string
    questionType?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    difficulty?: IntFilter<"QuizQuestion"> | number
    options?: JsonNullableFilter<"QuizQuestion">
    correctAnswer?: StringFilter<"QuizQuestion"> | string
    explanation?: StringNullableFilter<"QuizQuestion"> | string | null
    createdAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    aiGenerated?: BoolFilter<"QuizQuestion"> | boolean
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    quizAttemptQuestions?: QuizAttemptQuestionListRelationFilter
  }, "id">

  export type QuizQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    questionText?: SortOrder
    questionType?: SortOrder
    difficulty?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    aiGenerated?: SortOrder
    _count?: QuizQuestionCountOrderByAggregateInput
    _avg?: QuizQuestionAvgOrderByAggregateInput
    _max?: QuizQuestionMaxOrderByAggregateInput
    _min?: QuizQuestionMinOrderByAggregateInput
    _sum?: QuizQuestionSumOrderByAggregateInput
  }

  export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizQuestion"> | string
    subjectId?: StringWithAggregatesFilter<"QuizQuestion"> | string
    userId?: StringNullableWithAggregatesFilter<"QuizQuestion"> | string | null
    questionText?: StringWithAggregatesFilter<"QuizQuestion"> | string
    questionType?: EnumQuestionTypeWithAggregatesFilter<"QuizQuestion"> | $Enums.QuestionType
    difficulty?: IntWithAggregatesFilter<"QuizQuestion"> | number
    options?: JsonNullableWithAggregatesFilter<"QuizQuestion">
    correctAnswer?: StringWithAggregatesFilter<"QuizQuestion"> | string
    explanation?: StringNullableWithAggregatesFilter<"QuizQuestion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuizQuestion"> | Date | string
    aiGenerated?: BoolWithAggregatesFilter<"QuizQuestion"> | boolean
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    subjectId?: StringFilter<"QuizAttempt"> | string
    startTime?: DateTimeFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    totalQuestions?: IntFilter<"QuizAttempt"> | number
    correctAnswers?: IntFilter<"QuizAttempt"> | number
    scorePercentage?: DecimalFilter<"QuizAttempt"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quizAttemptQuestions?: QuizAttemptQuestionListRelationFilter
  }

  export type QuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
    user?: UserOrderByWithRelationInput
    quizAttemptQuestions?: QuizAttemptQuestionOrderByRelationAggregateInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    userId?: StringFilter<"QuizAttempt"> | string
    subjectId?: StringFilter<"QuizAttempt"> | string
    startTime?: DateTimeFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    totalQuestions?: IntFilter<"QuizAttempt"> | number
    correctAnswers?: IntFilter<"QuizAttempt"> | number
    scorePercentage?: DecimalFilter<"QuizAttempt"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quizAttemptQuestions?: QuizAttemptQuestionListRelationFilter
  }, "id">

  export type QuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizAttempt"> | string
    userId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    subjectId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    startTime?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"QuizAttempt"> | Date | string | null
    totalQuestions?: IntWithAggregatesFilter<"QuizAttempt"> | number
    correctAnswers?: IntWithAggregatesFilter<"QuizAttempt"> | number
    scorePercentage?: DecimalWithAggregatesFilter<"QuizAttempt"> | Decimal | DecimalJsLike | number | string
  }

  export type QuizAttemptQuestionWhereInput = {
    AND?: QuizAttemptQuestionWhereInput | QuizAttemptQuestionWhereInput[]
    OR?: QuizAttemptQuestionWhereInput[]
    NOT?: QuizAttemptQuestionWhereInput | QuizAttemptQuestionWhereInput[]
    id?: StringFilter<"QuizAttemptQuestion"> | string
    quizAttemptId?: StringFilter<"QuizAttemptQuestion"> | string
    questionId?: StringFilter<"QuizAttemptQuestion"> | string
    userAnswer?: StringNullableFilter<"QuizAttemptQuestion"> | string | null
    isCorrect?: BoolNullableFilter<"QuizAttemptQuestion"> | boolean | null
    quizAttempt?: XOR<QuizAttemptScalarRelationFilter, QuizAttemptWhereInput>
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
  }

  export type QuizAttemptQuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizAttemptId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    quizAttempt?: QuizAttemptOrderByWithRelationInput
    question?: QuizQuestionOrderByWithRelationInput
  }

  export type QuizAttemptQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizAttemptQuestionWhereInput | QuizAttemptQuestionWhereInput[]
    OR?: QuizAttemptQuestionWhereInput[]
    NOT?: QuizAttemptQuestionWhereInput | QuizAttemptQuestionWhereInput[]
    quizAttemptId?: StringFilter<"QuizAttemptQuestion"> | string
    questionId?: StringFilter<"QuizAttemptQuestion"> | string
    userAnswer?: StringNullableFilter<"QuizAttemptQuestion"> | string | null
    isCorrect?: BoolNullableFilter<"QuizAttemptQuestion"> | boolean | null
    quizAttempt?: XOR<QuizAttemptScalarRelationFilter, QuizAttemptWhereInput>
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
  }, "id">

  export type QuizAttemptQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizAttemptId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    _count?: QuizAttemptQuestionCountOrderByAggregateInput
    _max?: QuizAttemptQuestionMaxOrderByAggregateInput
    _min?: QuizAttemptQuestionMinOrderByAggregateInput
  }

  export type QuizAttemptQuestionScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptQuestionScalarWhereWithAggregatesInput | QuizAttemptQuestionScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptQuestionScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptQuestionScalarWhereWithAggregatesInput | QuizAttemptQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizAttemptQuestion"> | string
    quizAttemptId?: StringWithAggregatesFilter<"QuizAttemptQuestion"> | string
    questionId?: StringWithAggregatesFilter<"QuizAttemptQuestion"> | string
    userAnswer?: StringNullableWithAggregatesFilter<"QuizAttemptQuestion"> | string | null
    isCorrect?: BoolNullableWithAggregatesFilter<"QuizAttemptQuestion"> | boolean | null
  }

  export type ProgressTrackingWhereInput = {
    AND?: ProgressTrackingWhereInput | ProgressTrackingWhereInput[]
    OR?: ProgressTrackingWhereInput[]
    NOT?: ProgressTrackingWhereInput | ProgressTrackingWhereInput[]
    id?: StringFilter<"ProgressTracking"> | string
    userId?: StringFilter<"ProgressTracking"> | string
    date?: DateTimeFilter<"ProgressTracking"> | Date | string
    studyMinutes?: IntFilter<"ProgressTracking"> | number
    completedSessions?: IntFilter<"ProgressTracking"> | number
    missedSessions?: IntFilter<"ProgressTracking"> | number
    currentStreak?: IntFilter<"ProgressTracking"> | number
    simbiState?: StringFilter<"ProgressTracking"> | string
    motivationLevel?: IntFilter<"ProgressTracking"> | number
    lastInteraction?: DateTimeNullableFilter<"ProgressTracking"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressTrackingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    simbiState?: SortOrder
    motivationLevel?: SortOrder
    lastInteraction?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProgressTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: ProgressTrackingUserIdDateCompoundUniqueInput
    AND?: ProgressTrackingWhereInput | ProgressTrackingWhereInput[]
    OR?: ProgressTrackingWhereInput[]
    NOT?: ProgressTrackingWhereInput | ProgressTrackingWhereInput[]
    userId?: StringFilter<"ProgressTracking"> | string
    date?: DateTimeFilter<"ProgressTracking"> | Date | string
    studyMinutes?: IntFilter<"ProgressTracking"> | number
    completedSessions?: IntFilter<"ProgressTracking"> | number
    missedSessions?: IntFilter<"ProgressTracking"> | number
    currentStreak?: IntFilter<"ProgressTracking"> | number
    simbiState?: StringFilter<"ProgressTracking"> | string
    motivationLevel?: IntFilter<"ProgressTracking"> | number
    lastInteraction?: DateTimeNullableFilter<"ProgressTracking"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type ProgressTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    simbiState?: SortOrder
    motivationLevel?: SortOrder
    lastInteraction?: SortOrderInput | SortOrder
    _count?: ProgressTrackingCountOrderByAggregateInput
    _avg?: ProgressTrackingAvgOrderByAggregateInput
    _max?: ProgressTrackingMaxOrderByAggregateInput
    _min?: ProgressTrackingMinOrderByAggregateInput
    _sum?: ProgressTrackingSumOrderByAggregateInput
  }

  export type ProgressTrackingScalarWhereWithAggregatesInput = {
    AND?: ProgressTrackingScalarWhereWithAggregatesInput | ProgressTrackingScalarWhereWithAggregatesInput[]
    OR?: ProgressTrackingScalarWhereWithAggregatesInput[]
    NOT?: ProgressTrackingScalarWhereWithAggregatesInput | ProgressTrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressTracking"> | string
    userId?: StringWithAggregatesFilter<"ProgressTracking"> | string
    date?: DateTimeWithAggregatesFilter<"ProgressTracking"> | Date | string
    studyMinutes?: IntWithAggregatesFilter<"ProgressTracking"> | number
    completedSessions?: IntWithAggregatesFilter<"ProgressTracking"> | number
    missedSessions?: IntWithAggregatesFilter<"ProgressTracking"> | number
    currentStreak?: IntWithAggregatesFilter<"ProgressTracking"> | number
    simbiState?: StringWithAggregatesFilter<"ProgressTracking"> | string
    motivationLevel?: IntWithAggregatesFilter<"ProgressTracking"> | number
    lastInteraction?: DateTimeNullableWithAggregatesFilter<"ProgressTracking"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    milestones?: MilestoneCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubjectsInput
    studyPlans?: StudyPlanCreateNestedManyWithoutSubjectInput
    quizQuestions?: QuizQuestionCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutSubjectInput
    quizQuestions?: QuizQuestionUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutSubjectNestedInput
    quizQuestions?: QuizQuestionUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutSubjectNestedInput
    quizQuestions?: QuizQuestionUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanCreateInput = {
    id?: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    user: UserCreateNestedOneWithoutStudyPlansInput
    subject: SubjectCreateNestedOneWithoutStudyPlansInput
    studySessions?: StudySessionCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusCreateNestedManyWithoutPlanInput
    milestones?: MilestoneCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUncheckedCreateInput = {
    id?: string
    userId: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusUncheckedCreateNestedManyWithoutPlanInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudyPlansNestedInput
    studySessions?: StudySessionUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    studySessions?: StudySessionUncheckedUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUncheckedUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanCreateManyInput = {
    id?: string
    userId: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
  }

  export type StudyPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
  }

  export type StudyPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
  }

  export type StudySessionCreateInput = {
    id?: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
    plan: StudyPlanCreateNestedOneWithoutStudySessionsInput
    user: UserCreateNestedOneWithoutStudySessionsInput
  }

  export type StudySessionUncheckedCreateInput = {
    id?: string
    planId: string
    userId: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
  }

  export type StudySessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
    plan?: StudyPlanUpdateOneRequiredWithoutStudySessionsNestedInput
    user?: UserUpdateOneRequiredWithoutStudySessionsNestedInput
  }

  export type StudySessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type StudySessionCreateManyInput = {
    id?: string
    planId: string
    userId: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
  }

  export type StudySessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type StudySessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type PlanDailyStatusCreateInput = {
    id?: string
    date: Date | string
    totalMinutesStudied?: number
    targetAchieved?: boolean
    status: $Enums.DailyStatus
    plan: StudyPlanCreateNestedOneWithoutPlanDailyStatusInput
  }

  export type PlanDailyStatusUncheckedCreateInput = {
    id?: string
    planId: string
    date: Date | string
    totalMinutesStudied?: number
    targetAchieved?: boolean
    status: $Enums.DailyStatus
  }

  export type PlanDailyStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
    plan?: StudyPlanUpdateOneRequiredWithoutPlanDailyStatusNestedInput
  }

  export type PlanDailyStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
  }

  export type PlanDailyStatusCreateManyInput = {
    id?: string
    planId: string
    date: Date | string
    totalMinutesStudied?: number
    targetAchieved?: boolean
    status: $Enums.DailyStatus
  }

  export type PlanDailyStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
  }

  export type PlanDailyStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMilestonesInput
    plan?: StudyPlanCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    userId: string
    planId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMilestonesNestedInput
    plan?: StudyPlanUpdateOneWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MilestoneCreateManyInput = {
    id?: string
    userId: string
    planId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizQuestionCreateInput = {
    id?: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
    subject: SubjectCreateNestedOneWithoutQuizQuestionsInput
    quizAttemptQuestions?: QuizAttemptQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateInput = {
    id?: string
    subjectId: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
    subject?: SubjectUpdateOneRequiredWithoutQuizQuestionsNestedInput
    quizAttemptQuestions?: QuizAttemptQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionCreateManyInput = {
    id?: string
    subjectId: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
  }

  export type QuizQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizAttemptCreateInput = {
    id?: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    quizAttemptQuestions?: QuizAttemptQuestionCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    quizAttemptQuestions?: QuizAttemptQuestionUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptCreateManyInput = {
    id?: string
    userId: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
  }

  export type QuizAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type QuizAttemptQuestionCreateInput = {
    id?: string
    userAnswer?: string | null
    isCorrect?: boolean | null
    quizAttempt: QuizAttemptCreateNestedOneWithoutQuizAttemptQuestionsInput
    question: QuizQuestionCreateNestedOneWithoutQuizAttemptQuestionsInput
  }

  export type QuizAttemptQuestionUncheckedCreateInput = {
    id?: string
    quizAttemptId: string
    questionId: string
    userAnswer?: string | null
    isCorrect?: boolean | null
  }

  export type QuizAttemptQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quizAttempt?: QuizAttemptUpdateOneRequiredWithoutQuizAttemptQuestionsNestedInput
    question?: QuizQuestionUpdateOneRequiredWithoutQuizAttemptQuestionsNestedInput
  }

  export type QuizAttemptQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizAttemptQuestionCreateManyInput = {
    id?: string
    quizAttemptId: string
    questionId: string
    userAnswer?: string | null
    isCorrect?: boolean | null
  }

  export type QuizAttemptQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizAttemptQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProgressTrackingCreateInput = {
    id?: string
    date: Date | string
    studyMinutes?: number
    completedSessions?: number
    missedSessions?: number
    currentStreak?: number
    simbiState?: string
    motivationLevel?: number
    lastInteraction?: Date | string | null
    user: UserCreateNestedOneWithoutProgressTrackingInput
  }

  export type ProgressTrackingUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    studyMinutes?: number
    completedSessions?: number
    missedSessions?: number
    currentStreak?: number
    simbiState?: string
    motivationLevel?: number
    lastInteraction?: Date | string | null
  }

  export type ProgressTrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProgressTrackingNestedInput
  }

  export type ProgressTrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressTrackingCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    studyMinutes?: number
    completedSessions?: number
    missedSessions?: number
    currentStreak?: number
    simbiState?: string
    motivationLevel?: number
    lastInteraction?: Date | string | null
  }

  export type ProgressTrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressTrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type StudyPlanListRelationFilter = {
    every?: StudyPlanWhereInput
    some?: StudyPlanWhereInput
    none?: StudyPlanWhereInput
  }

  export type StudySessionListRelationFilter = {
    every?: StudySessionWhereInput
    some?: StudySessionWhereInput
    none?: StudySessionWhereInput
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }

  export type ProgressTrackingListRelationFilter = {
    every?: ProgressTrackingWhereInput
    some?: ProgressTrackingWhereInput
    none?: ProgressTrackingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudySessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    educationLevel?: SortOrder
    timezone?: SortOrder
    preferredStudyMethod?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    educationLevel?: SortOrder
    timezone?: SortOrder
    preferredStudyMethod?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    educationLevel?: SortOrder
    timezone?: SortOrder
    preferredStudyMethod?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuizQuestionListRelationFilter = {
    every?: QuizQuestionWhereInput
    some?: QuizQuestionWhereInput
    none?: QuizQuestionWhereInput
  }

  export type QuizQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    educationLevel?: SortOrder
    educationYear?: SortOrder
    colorCode?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    educationYear?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    educationLevel?: SortOrder
    educationYear?: SortOrder
    colorCode?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    educationLevel?: SortOrder
    educationYear?: SortOrder
    colorCode?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    educationYear?: SortOrder
    difficultyLevel?: SortOrder
    priority?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type PlanDailyStatusListRelationFilter = {
    every?: PlanDailyStatusWhereInput
    some?: PlanDailyStatusWhereInput
    none?: PlanDailyStatusWhereInput
  }

  export type PlanDailyStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    planName?: SortOrder
    dailyTargetMinutes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
  }

  export type StudyPlanAvgOrderByAggregateInput = {
    dailyTargetMinutes?: SortOrder
  }

  export type StudyPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    planName?: SortOrder
    dailyTargetMinutes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
  }

  export type StudyPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    planName?: SortOrder
    dailyTargetMinutes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
  }

  export type StudyPlanSumOrderByAggregateInput = {
    dailyTargetMinutes?: SortOrder
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type StudyPlanScalarRelationFilter = {
    is?: StudyPlanWhereInput
    isNot?: StudyPlanWhereInput
  }

  export type StudySessionCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrder
    productivityRating?: SortOrder
    simbiReaction?: SortOrder
  }

  export type StudySessionAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
    productivityRating?: SortOrder
  }

  export type StudySessionMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrder
    productivityRating?: SortOrder
    simbiReaction?: SortOrder
  }

  export type StudySessionMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    userId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrder
    productivityRating?: SortOrder
    simbiReaction?: SortOrder
  }

  export type StudySessionSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
    productivityRating?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumDailyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyStatus | EnumDailyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyStatusFilter<$PrismaModel> | $Enums.DailyStatus
  }

  export type PlanDailyStatusPlanIdDateCompoundUniqueInput = {
    planId: string
    date: Date | string
  }

  export type PlanDailyStatusCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    totalMinutesStudied?: SortOrder
    targetAchieved?: SortOrder
    status?: SortOrder
  }

  export type PlanDailyStatusAvgOrderByAggregateInput = {
    totalMinutesStudied?: SortOrder
  }

  export type PlanDailyStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    totalMinutesStudied?: SortOrder
    targetAchieved?: SortOrder
    status?: SortOrder
  }

  export type PlanDailyStatusMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    totalMinutesStudied?: SortOrder
    targetAchieved?: SortOrder
    status?: SortOrder
  }

  export type PlanDailyStatusSumOrderByAggregateInput = {
    totalMinutesStudied?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDailyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyStatus | EnumDailyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyStatusWithAggregatesFilter<$PrismaModel> | $Enums.DailyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDailyStatusFilter<$PrismaModel>
    _max?: NestedEnumDailyStatusFilter<$PrismaModel>
  }

  export type EnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type StudyPlanNullableScalarRelationFilter = {
    is?: StudyPlanWhereInput | null
    isNot?: StudyPlanWhereInput | null
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    completionCriteria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    completionCriteria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    completionCriteria?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuizAttemptQuestionListRelationFilter = {
    every?: QuizAttemptQuestionWhereInput
    some?: QuizAttemptQuestionWhereInput
    none?: QuizAttemptQuestionWhereInput
  }

  export type QuizAttemptQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    userId?: SortOrder
    questionText?: SortOrder
    questionType?: SortOrder
    difficulty?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    aiGenerated?: SortOrder
  }

  export type QuizQuestionAvgOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type QuizQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    userId?: SortOrder
    questionText?: SortOrder
    questionType?: SortOrder
    difficulty?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    aiGenerated?: SortOrder
  }

  export type QuizQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    userId?: SortOrder
    questionText?: SortOrder
    questionType?: SortOrder
    difficulty?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    aiGenerated?: SortOrder
  }

  export type QuizQuestionSumOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subjectId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    scorePercentage?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type QuizAttemptScalarRelationFilter = {
    is?: QuizAttemptWhereInput
    isNot?: QuizAttemptWhereInput
  }

  export type QuizQuestionScalarRelationFilter = {
    is?: QuizQuestionWhereInput
    isNot?: QuizQuestionWhereInput
  }

  export type QuizAttemptQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizAttemptId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuizAttemptQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizAttemptId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuizAttemptQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizAttemptId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProgressTrackingUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type ProgressTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    simbiState?: SortOrder
    motivationLevel?: SortOrder
    lastInteraction?: SortOrder
  }

  export type ProgressTrackingAvgOrderByAggregateInput = {
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    motivationLevel?: SortOrder
  }

  export type ProgressTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    simbiState?: SortOrder
    motivationLevel?: SortOrder
    lastInteraction?: SortOrder
  }

  export type ProgressTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    simbiState?: SortOrder
    motivationLevel?: SortOrder
    lastInteraction?: SortOrder
  }

  export type ProgressTrackingSumOrderByAggregateInput = {
    studyMinutes?: SortOrder
    completedSessions?: SortOrder
    missedSessions?: SortOrder
    currentStreak?: SortOrder
    motivationLevel?: SortOrder
  }

  export type SubjectCreateNestedManyWithoutUserInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type StudyPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type StudySessionCreateNestedManyWithoutUserInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
  }

  export type MilestoneCreateNestedManyWithoutUserInput = {
    create?: XOR<MilestoneCreateWithoutUserInput, MilestoneUncheckedCreateWithoutUserInput> | MilestoneCreateWithoutUserInput[] | MilestoneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutUserInput | MilestoneCreateOrConnectWithoutUserInput[]
    createMany?: MilestoneCreateManyUserInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type ProgressTrackingCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressTrackingCreateWithoutUserInput, ProgressTrackingUncheckedCreateWithoutUserInput> | ProgressTrackingCreateWithoutUserInput[] | ProgressTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressTrackingCreateOrConnectWithoutUserInput | ProgressTrackingCreateOrConnectWithoutUserInput[]
    createMany?: ProgressTrackingCreateManyUserInputEnvelope
    connect?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type StudyPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type StudySessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MilestoneCreateWithoutUserInput, MilestoneUncheckedCreateWithoutUserInput> | MilestoneCreateWithoutUserInput[] | MilestoneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutUserInput | MilestoneCreateOrConnectWithoutUserInput[]
    createMany?: MilestoneCreateManyUserInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type ProgressTrackingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressTrackingCreateWithoutUserInput, ProgressTrackingUncheckedCreateWithoutUserInput> | ProgressTrackingCreateWithoutUserInput[] | ProgressTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressTrackingCreateOrConnectWithoutUserInput | ProgressTrackingCreateOrConnectWithoutUserInput[]
    createMany?: ProgressTrackingCreateManyUserInputEnvelope
    connect?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutUserInput | SubjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutUserInput | SubjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutUserInput | SubjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type StudyPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutUserInput | StudyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutUserInput | StudyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutUserInput | StudyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type StudySessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    upsert?: StudySessionUpsertWithWhereUniqueWithoutUserInput | StudySessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    set?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    disconnect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    delete?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    update?: StudySessionUpdateWithWhereUniqueWithoutUserInput | StudySessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudySessionUpdateManyWithWhereWithoutUserInput | StudySessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
  }

  export type MilestoneUpdateManyWithoutUserNestedInput = {
    create?: XOR<MilestoneCreateWithoutUserInput, MilestoneUncheckedCreateWithoutUserInput> | MilestoneCreateWithoutUserInput[] | MilestoneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutUserInput | MilestoneCreateOrConnectWithoutUserInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutUserInput | MilestoneUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MilestoneCreateManyUserInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutUserInput | MilestoneUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutUserInput | MilestoneUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type ProgressTrackingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressTrackingCreateWithoutUserInput, ProgressTrackingUncheckedCreateWithoutUserInput> | ProgressTrackingCreateWithoutUserInput[] | ProgressTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressTrackingCreateOrConnectWithoutUserInput | ProgressTrackingCreateOrConnectWithoutUserInput[]
    upsert?: ProgressTrackingUpsertWithWhereUniqueWithoutUserInput | ProgressTrackingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressTrackingCreateManyUserInputEnvelope
    set?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    disconnect?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    delete?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    connect?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    update?: ProgressTrackingUpdateWithWhereUniqueWithoutUserInput | ProgressTrackingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressTrackingUpdateManyWithWhereWithoutUserInput | ProgressTrackingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressTrackingScalarWhereInput | ProgressTrackingScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutUserInput | SubjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutUserInput | SubjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutUserInput | SubjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type StudyPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput> | StudyPlanCreateWithoutUserInput[] | StudyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutUserInput | StudyPlanCreateOrConnectWithoutUserInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutUserInput | StudyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyPlanCreateManyUserInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutUserInput | StudyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutUserInput | StudyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type StudySessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput> | StudySessionCreateWithoutUserInput[] | StudySessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutUserInput | StudySessionCreateOrConnectWithoutUserInput[]
    upsert?: StudySessionUpsertWithWhereUniqueWithoutUserInput | StudySessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudySessionCreateManyUserInputEnvelope
    set?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    disconnect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    delete?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    update?: StudySessionUpdateWithWhereUniqueWithoutUserInput | StudySessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudySessionUpdateManyWithWhereWithoutUserInput | StudySessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MilestoneCreateWithoutUserInput, MilestoneUncheckedCreateWithoutUserInput> | MilestoneCreateWithoutUserInput[] | MilestoneUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutUserInput | MilestoneCreateOrConnectWithoutUserInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutUserInput | MilestoneUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MilestoneCreateManyUserInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutUserInput | MilestoneUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutUserInput | MilestoneUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressTrackingCreateWithoutUserInput, ProgressTrackingUncheckedCreateWithoutUserInput> | ProgressTrackingCreateWithoutUserInput[] | ProgressTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressTrackingCreateOrConnectWithoutUserInput | ProgressTrackingCreateOrConnectWithoutUserInput[]
    upsert?: ProgressTrackingUpsertWithWhereUniqueWithoutUserInput | ProgressTrackingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressTrackingCreateManyUserInputEnvelope
    set?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    disconnect?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    delete?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    connect?: ProgressTrackingWhereUniqueInput | ProgressTrackingWhereUniqueInput[]
    update?: ProgressTrackingUpdateWithWhereUniqueWithoutUserInput | ProgressTrackingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressTrackingUpdateManyWithWhereWithoutUserInput | ProgressTrackingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressTrackingScalarWhereInput | ProgressTrackingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsInput
    connect?: UserWhereUniqueInput
  }

  export type StudyPlanCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudyPlanCreateWithoutSubjectInput, StudyPlanUncheckedCreateWithoutSubjectInput> | StudyPlanCreateWithoutSubjectInput[] | StudyPlanUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutSubjectInput | StudyPlanCreateOrConnectWithoutSubjectInput[]
    createMany?: StudyPlanCreateManySubjectInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type QuizQuestionCreateNestedManyWithoutSubjectInput = {
    create?: XOR<QuizQuestionCreateWithoutSubjectInput, QuizQuestionUncheckedCreateWithoutSubjectInput> | QuizQuestionCreateWithoutSubjectInput[] | QuizQuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSubjectInput | QuizQuestionCreateOrConnectWithoutSubjectInput[]
    createMany?: QuizQuestionCreateManySubjectInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type StudyPlanUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudyPlanCreateWithoutSubjectInput, StudyPlanUncheckedCreateWithoutSubjectInput> | StudyPlanCreateWithoutSubjectInput[] | StudyPlanUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutSubjectInput | StudyPlanCreateOrConnectWithoutSubjectInput[]
    createMany?: StudyPlanCreateManySubjectInputEnvelope
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
  }

  export type QuizQuestionUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<QuizQuestionCreateWithoutSubjectInput, QuizQuestionUncheckedCreateWithoutSubjectInput> | QuizQuestionCreateWithoutSubjectInput[] | QuizQuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSubjectInput | QuizQuestionCreateOrConnectWithoutSubjectInput[]
    createMany?: QuizQuestionCreateManySubjectInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsInput
    upsert?: UserUpsertWithoutSubjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubjectsInput, UserUpdateWithoutSubjectsInput>, UserUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudyPlanUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudyPlanCreateWithoutSubjectInput, StudyPlanUncheckedCreateWithoutSubjectInput> | StudyPlanCreateWithoutSubjectInput[] | StudyPlanUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutSubjectInput | StudyPlanCreateOrConnectWithoutSubjectInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutSubjectInput | StudyPlanUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudyPlanCreateManySubjectInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutSubjectInput | StudyPlanUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutSubjectInput | StudyPlanUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type QuizQuestionUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutSubjectInput, QuizQuestionUncheckedCreateWithoutSubjectInput> | QuizQuestionCreateWithoutSubjectInput[] | QuizQuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSubjectInput | QuizQuestionCreateOrConnectWithoutSubjectInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutSubjectInput | QuizQuestionUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: QuizQuestionCreateManySubjectInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutSubjectInput | QuizQuestionUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutSubjectInput | QuizQuestionUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type StudyPlanUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudyPlanCreateWithoutSubjectInput, StudyPlanUncheckedCreateWithoutSubjectInput> | StudyPlanCreateWithoutSubjectInput[] | StudyPlanUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyPlanCreateOrConnectWithoutSubjectInput | StudyPlanCreateOrConnectWithoutSubjectInput[]
    upsert?: StudyPlanUpsertWithWhereUniqueWithoutSubjectInput | StudyPlanUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudyPlanCreateManySubjectInputEnvelope
    set?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    disconnect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    delete?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    connect?: StudyPlanWhereUniqueInput | StudyPlanWhereUniqueInput[]
    update?: StudyPlanUpdateWithWhereUniqueWithoutSubjectInput | StudyPlanUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudyPlanUpdateManyWithWhereWithoutSubjectInput | StudyPlanUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
  }

  export type QuizQuestionUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutSubjectInput, QuizQuestionUncheckedCreateWithoutSubjectInput> | QuizQuestionCreateWithoutSubjectInput[] | QuizQuestionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSubjectInput | QuizQuestionCreateOrConnectWithoutSubjectInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutSubjectInput | QuizQuestionUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: QuizQuestionCreateManySubjectInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutSubjectInput | QuizQuestionUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutSubjectInput | QuizQuestionUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudyPlansInput = {
    create?: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyPlansInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutStudyPlansInput = {
    create?: XOR<SubjectCreateWithoutStudyPlansInput, SubjectUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudyPlansInput
    connect?: SubjectWhereUniqueInput
  }

  export type StudySessionCreateNestedManyWithoutPlanInput = {
    create?: XOR<StudySessionCreateWithoutPlanInput, StudySessionUncheckedCreateWithoutPlanInput> | StudySessionCreateWithoutPlanInput[] | StudySessionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutPlanInput | StudySessionCreateOrConnectWithoutPlanInput[]
    createMany?: StudySessionCreateManyPlanInputEnvelope
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
  }

  export type PlanDailyStatusCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanDailyStatusCreateWithoutPlanInput, PlanDailyStatusUncheckedCreateWithoutPlanInput> | PlanDailyStatusCreateWithoutPlanInput[] | PlanDailyStatusUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDailyStatusCreateOrConnectWithoutPlanInput | PlanDailyStatusCreateOrConnectWithoutPlanInput[]
    createMany?: PlanDailyStatusCreateManyPlanInputEnvelope
    connect?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
  }

  export type MilestoneCreateNestedManyWithoutPlanInput = {
    create?: XOR<MilestoneCreateWithoutPlanInput, MilestoneUncheckedCreateWithoutPlanInput> | MilestoneCreateWithoutPlanInput[] | MilestoneUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutPlanInput | MilestoneCreateOrConnectWithoutPlanInput[]
    createMany?: MilestoneCreateManyPlanInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type StudySessionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<StudySessionCreateWithoutPlanInput, StudySessionUncheckedCreateWithoutPlanInput> | StudySessionCreateWithoutPlanInput[] | StudySessionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutPlanInput | StudySessionCreateOrConnectWithoutPlanInput[]
    createMany?: StudySessionCreateManyPlanInputEnvelope
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
  }

  export type PlanDailyStatusUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanDailyStatusCreateWithoutPlanInput, PlanDailyStatusUncheckedCreateWithoutPlanInput> | PlanDailyStatusCreateWithoutPlanInput[] | PlanDailyStatusUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDailyStatusCreateOrConnectWithoutPlanInput | PlanDailyStatusCreateOrConnectWithoutPlanInput[]
    createMany?: PlanDailyStatusCreateManyPlanInputEnvelope
    connect?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<MilestoneCreateWithoutPlanInput, MilestoneUncheckedCreateWithoutPlanInput> | MilestoneCreateWithoutPlanInput[] | MilestoneUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutPlanInput | MilestoneCreateOrConnectWithoutPlanInput[]
    createMany?: MilestoneCreateManyPlanInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type UserUpdateOneRequiredWithoutStudyPlansNestedInput = {
    create?: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyPlansInput
    upsert?: UserUpsertWithoutStudyPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudyPlansInput, UserUpdateWithoutStudyPlansInput>, UserUncheckedUpdateWithoutStudyPlansInput>
  }

  export type SubjectUpdateOneRequiredWithoutStudyPlansNestedInput = {
    create?: XOR<SubjectCreateWithoutStudyPlansInput, SubjectUncheckedCreateWithoutStudyPlansInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudyPlansInput
    upsert?: SubjectUpsertWithoutStudyPlansInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutStudyPlansInput, SubjectUpdateWithoutStudyPlansInput>, SubjectUncheckedUpdateWithoutStudyPlansInput>
  }

  export type StudySessionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<StudySessionCreateWithoutPlanInput, StudySessionUncheckedCreateWithoutPlanInput> | StudySessionCreateWithoutPlanInput[] | StudySessionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutPlanInput | StudySessionCreateOrConnectWithoutPlanInput[]
    upsert?: StudySessionUpsertWithWhereUniqueWithoutPlanInput | StudySessionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: StudySessionCreateManyPlanInputEnvelope
    set?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    disconnect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    delete?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    update?: StudySessionUpdateWithWhereUniqueWithoutPlanInput | StudySessionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: StudySessionUpdateManyWithWhereWithoutPlanInput | StudySessionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
  }

  export type PlanDailyStatusUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanDailyStatusCreateWithoutPlanInput, PlanDailyStatusUncheckedCreateWithoutPlanInput> | PlanDailyStatusCreateWithoutPlanInput[] | PlanDailyStatusUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDailyStatusCreateOrConnectWithoutPlanInput | PlanDailyStatusCreateOrConnectWithoutPlanInput[]
    upsert?: PlanDailyStatusUpsertWithWhereUniqueWithoutPlanInput | PlanDailyStatusUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanDailyStatusCreateManyPlanInputEnvelope
    set?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    disconnect?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    delete?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    connect?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    update?: PlanDailyStatusUpdateWithWhereUniqueWithoutPlanInput | PlanDailyStatusUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanDailyStatusUpdateManyWithWhereWithoutPlanInput | PlanDailyStatusUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanDailyStatusScalarWhereInput | PlanDailyStatusScalarWhereInput[]
  }

  export type MilestoneUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MilestoneCreateWithoutPlanInput, MilestoneUncheckedCreateWithoutPlanInput> | MilestoneCreateWithoutPlanInput[] | MilestoneUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutPlanInput | MilestoneCreateOrConnectWithoutPlanInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutPlanInput | MilestoneUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MilestoneCreateManyPlanInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutPlanInput | MilestoneUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutPlanInput | MilestoneUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type StudySessionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<StudySessionCreateWithoutPlanInput, StudySessionUncheckedCreateWithoutPlanInput> | StudySessionCreateWithoutPlanInput[] | StudySessionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: StudySessionCreateOrConnectWithoutPlanInput | StudySessionCreateOrConnectWithoutPlanInput[]
    upsert?: StudySessionUpsertWithWhereUniqueWithoutPlanInput | StudySessionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: StudySessionCreateManyPlanInputEnvelope
    set?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    disconnect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    delete?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    connect?: StudySessionWhereUniqueInput | StudySessionWhereUniqueInput[]
    update?: StudySessionUpdateWithWhereUniqueWithoutPlanInput | StudySessionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: StudySessionUpdateManyWithWhereWithoutPlanInput | StudySessionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
  }

  export type PlanDailyStatusUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanDailyStatusCreateWithoutPlanInput, PlanDailyStatusUncheckedCreateWithoutPlanInput> | PlanDailyStatusCreateWithoutPlanInput[] | PlanDailyStatusUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDailyStatusCreateOrConnectWithoutPlanInput | PlanDailyStatusCreateOrConnectWithoutPlanInput[]
    upsert?: PlanDailyStatusUpsertWithWhereUniqueWithoutPlanInput | PlanDailyStatusUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanDailyStatusCreateManyPlanInputEnvelope
    set?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    disconnect?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    delete?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    connect?: PlanDailyStatusWhereUniqueInput | PlanDailyStatusWhereUniqueInput[]
    update?: PlanDailyStatusUpdateWithWhereUniqueWithoutPlanInput | PlanDailyStatusUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanDailyStatusUpdateManyWithWhereWithoutPlanInput | PlanDailyStatusUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanDailyStatusScalarWhereInput | PlanDailyStatusScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MilestoneCreateWithoutPlanInput, MilestoneUncheckedCreateWithoutPlanInput> | MilestoneCreateWithoutPlanInput[] | MilestoneUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutPlanInput | MilestoneCreateOrConnectWithoutPlanInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutPlanInput | MilestoneUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MilestoneCreateManyPlanInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutPlanInput | MilestoneUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutPlanInput | MilestoneUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type StudyPlanCreateNestedOneWithoutStudySessionsInput = {
    create?: XOR<StudyPlanCreateWithoutStudySessionsInput, StudyPlanUncheckedCreateWithoutStudySessionsInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutStudySessionsInput
    connect?: StudyPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudySessionsInput = {
    create?: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudySessionsInput
    connect?: UserWhereUniqueInput
  }

  export type StudyPlanUpdateOneRequiredWithoutStudySessionsNestedInput = {
    create?: XOR<StudyPlanCreateWithoutStudySessionsInput, StudyPlanUncheckedCreateWithoutStudySessionsInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutStudySessionsInput
    upsert?: StudyPlanUpsertWithoutStudySessionsInput
    connect?: StudyPlanWhereUniqueInput
    update?: XOR<XOR<StudyPlanUpdateToOneWithWhereWithoutStudySessionsInput, StudyPlanUpdateWithoutStudySessionsInput>, StudyPlanUncheckedUpdateWithoutStudySessionsInput>
  }

  export type UserUpdateOneRequiredWithoutStudySessionsNestedInput = {
    create?: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudySessionsInput
    upsert?: UserUpsertWithoutStudySessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudySessionsInput, UserUpdateWithoutStudySessionsInput>, UserUncheckedUpdateWithoutStudySessionsInput>
  }

  export type StudyPlanCreateNestedOneWithoutPlanDailyStatusInput = {
    create?: XOR<StudyPlanCreateWithoutPlanDailyStatusInput, StudyPlanUncheckedCreateWithoutPlanDailyStatusInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutPlanDailyStatusInput
    connect?: StudyPlanWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDailyStatusFieldUpdateOperationsInput = {
    set?: $Enums.DailyStatus
  }

  export type StudyPlanUpdateOneRequiredWithoutPlanDailyStatusNestedInput = {
    create?: XOR<StudyPlanCreateWithoutPlanDailyStatusInput, StudyPlanUncheckedCreateWithoutPlanDailyStatusInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutPlanDailyStatusInput
    upsert?: StudyPlanUpsertWithoutPlanDailyStatusInput
    connect?: StudyPlanWhereUniqueInput
    update?: XOR<XOR<StudyPlanUpdateToOneWithWhereWithoutPlanDailyStatusInput, StudyPlanUpdateWithoutPlanDailyStatusInput>, StudyPlanUncheckedUpdateWithoutPlanDailyStatusInput>
  }

  export type UserCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<UserCreateWithoutMilestonesInput, UserUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMilestonesInput
    connect?: UserWhereUniqueInput
  }

  export type StudyPlanCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<StudyPlanCreateWithoutMilestonesInput, StudyPlanUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutMilestonesInput
    connect?: StudyPlanWhereUniqueInput
  }

  export type EnumMilestoneStatusFieldUpdateOperationsInput = {
    set?: $Enums.MilestoneStatus
  }

  export type UserUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<UserCreateWithoutMilestonesInput, UserUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMilestonesInput
    upsert?: UserUpsertWithoutMilestonesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMilestonesInput, UserUpdateWithoutMilestonesInput>, UserUncheckedUpdateWithoutMilestonesInput>
  }

  export type StudyPlanUpdateOneWithoutMilestonesNestedInput = {
    create?: XOR<StudyPlanCreateWithoutMilestonesInput, StudyPlanUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: StudyPlanCreateOrConnectWithoutMilestonesInput
    upsert?: StudyPlanUpsertWithoutMilestonesInput
    disconnect?: StudyPlanWhereInput | boolean
    delete?: StudyPlanWhereInput | boolean
    connect?: StudyPlanWhereUniqueInput
    update?: XOR<XOR<StudyPlanUpdateToOneWithWhereWithoutMilestonesInput, StudyPlanUpdateWithoutMilestonesInput>, StudyPlanUncheckedUpdateWithoutMilestonesInput>
  }

  export type SubjectCreateNestedOneWithoutQuizQuestionsInput = {
    create?: XOR<SubjectCreateWithoutQuizQuestionsInput, SubjectUncheckedCreateWithoutQuizQuestionsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutQuizQuestionsInput
    connect?: SubjectWhereUniqueInput
  }

  export type QuizAttemptQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuestionInput, QuizAttemptQuestionUncheckedCreateWithoutQuestionInput> | QuizAttemptQuestionCreateWithoutQuestionInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuestionInput | QuizAttemptQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizAttemptQuestionCreateManyQuestionInputEnvelope
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
  }

  export type QuizAttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuestionInput, QuizAttemptQuestionUncheckedCreateWithoutQuestionInput> | QuizAttemptQuestionCreateWithoutQuestionInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuestionInput | QuizAttemptQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizAttemptQuestionCreateManyQuestionInputEnvelope
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type SubjectUpdateOneRequiredWithoutQuizQuestionsNestedInput = {
    create?: XOR<SubjectCreateWithoutQuizQuestionsInput, SubjectUncheckedCreateWithoutQuizQuestionsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutQuizQuestionsInput
    upsert?: SubjectUpsertWithoutQuizQuestionsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutQuizQuestionsInput, SubjectUpdateWithoutQuizQuestionsInput>, SubjectUncheckedUpdateWithoutQuizQuestionsInput>
  }

  export type QuizAttemptQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuestionInput, QuizAttemptQuestionUncheckedCreateWithoutQuestionInput> | QuizAttemptQuestionCreateWithoutQuestionInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuestionInput | QuizAttemptQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput | QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizAttemptQuestionCreateManyQuestionInputEnvelope
    set?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    disconnect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    delete?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    update?: QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput | QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizAttemptQuestionUpdateManyWithWhereWithoutQuestionInput | QuizAttemptQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizAttemptQuestionScalarWhereInput | QuizAttemptQuestionScalarWhereInput[]
  }

  export type QuizAttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuestionInput, QuizAttemptQuestionUncheckedCreateWithoutQuestionInput> | QuizAttemptQuestionCreateWithoutQuestionInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuestionInput | QuizAttemptQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput | QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizAttemptQuestionCreateManyQuestionInputEnvelope
    set?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    disconnect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    delete?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    update?: QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput | QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizAttemptQuestionUpdateManyWithWhereWithoutQuestionInput | QuizAttemptQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizAttemptQuestionScalarWhereInput | QuizAttemptQuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizAttemptQuestionCreateNestedManyWithoutQuizAttemptInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput> | QuizAttemptQuestionCreateWithoutQuizAttemptInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput | QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput[]
    createMany?: QuizAttemptQuestionCreateManyQuizAttemptInputEnvelope
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
  }

  export type QuizAttemptQuestionUncheckedCreateNestedManyWithoutQuizAttemptInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput> | QuizAttemptQuestionCreateWithoutQuizAttemptInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput | QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput[]
    createMany?: QuizAttemptQuestionCreateManyQuizAttemptInputEnvelope
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    upsert?: UserUpsertWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizAttemptsInput, UserUpdateWithoutQuizAttemptsInput>, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type QuizAttemptQuestionUpdateManyWithoutQuizAttemptNestedInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput> | QuizAttemptQuestionCreateWithoutQuizAttemptInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput | QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput[]
    upsert?: QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuizAttemptInput | QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuizAttemptInput[]
    createMany?: QuizAttemptQuestionCreateManyQuizAttemptInputEnvelope
    set?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    disconnect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    delete?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    update?: QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuizAttemptInput | QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuizAttemptInput[]
    updateMany?: QuizAttemptQuestionUpdateManyWithWhereWithoutQuizAttemptInput | QuizAttemptQuestionUpdateManyWithWhereWithoutQuizAttemptInput[]
    deleteMany?: QuizAttemptQuestionScalarWhereInput | QuizAttemptQuestionScalarWhereInput[]
  }

  export type QuizAttemptQuestionUncheckedUpdateManyWithoutQuizAttemptNestedInput = {
    create?: XOR<QuizAttemptQuestionCreateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput> | QuizAttemptQuestionCreateWithoutQuizAttemptInput[] | QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput[]
    connectOrCreate?: QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput | QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput[]
    upsert?: QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuizAttemptInput | QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuizAttemptInput[]
    createMany?: QuizAttemptQuestionCreateManyQuizAttemptInputEnvelope
    set?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    disconnect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    delete?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    connect?: QuizAttemptQuestionWhereUniqueInput | QuizAttemptQuestionWhereUniqueInput[]
    update?: QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuizAttemptInput | QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuizAttemptInput[]
    updateMany?: QuizAttemptQuestionUpdateManyWithWhereWithoutQuizAttemptInput | QuizAttemptQuestionUpdateManyWithWhereWithoutQuizAttemptInput[]
    deleteMany?: QuizAttemptQuestionScalarWhereInput | QuizAttemptQuestionScalarWhereInput[]
  }

  export type QuizAttemptCreateNestedOneWithoutQuizAttemptQuestionsInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizAttemptQuestionsInput, QuizAttemptUncheckedCreateWithoutQuizAttemptQuestionsInput>
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizAttemptQuestionsInput
    connect?: QuizAttemptWhereUniqueInput
  }

  export type QuizQuestionCreateNestedOneWithoutQuizAttemptQuestionsInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizAttemptQuestionsInput, QuizQuestionUncheckedCreateWithoutQuizAttemptQuestionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizAttemptQuestionsInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type QuizAttemptUpdateOneRequiredWithoutQuizAttemptQuestionsNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizAttemptQuestionsInput, QuizAttemptUncheckedCreateWithoutQuizAttemptQuestionsInput>
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizAttemptQuestionsInput
    upsert?: QuizAttemptUpsertWithoutQuizAttemptQuestionsInput
    connect?: QuizAttemptWhereUniqueInput
    update?: XOR<XOR<QuizAttemptUpdateToOneWithWhereWithoutQuizAttemptQuestionsInput, QuizAttemptUpdateWithoutQuizAttemptQuestionsInput>, QuizAttemptUncheckedUpdateWithoutQuizAttemptQuestionsInput>
  }

  export type QuizQuestionUpdateOneRequiredWithoutQuizAttemptQuestionsNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizAttemptQuestionsInput, QuizQuestionUncheckedCreateWithoutQuizAttemptQuestionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizAttemptQuestionsInput
    upsert?: QuizQuestionUpsertWithoutQuizAttemptQuestionsInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutQuizAttemptQuestionsInput, QuizQuestionUpdateWithoutQuizAttemptQuestionsInput>, QuizQuestionUncheckedUpdateWithoutQuizAttemptQuestionsInput>
  }

  export type UserCreateNestedOneWithoutProgressTrackingInput = {
    create?: XOR<UserCreateWithoutProgressTrackingInput, UserUncheckedCreateWithoutProgressTrackingInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressTrackingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgressTrackingNestedInput = {
    create?: XOR<UserCreateWithoutProgressTrackingInput, UserUncheckedCreateWithoutProgressTrackingInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressTrackingInput
    upsert?: UserUpsertWithoutProgressTrackingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressTrackingInput, UserUpdateWithoutProgressTrackingInput>, UserUncheckedUpdateWithoutProgressTrackingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDailyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyStatus | EnumDailyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyStatusFilter<$PrismaModel> | $Enums.DailyStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDailyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyStatus | EnumDailyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyStatus[] | ListEnumDailyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyStatusWithAggregatesFilter<$PrismaModel> | $Enums.DailyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDailyStatusFilter<$PrismaModel>
    _max?: NestedEnumDailyStatusFilter<$PrismaModel>
  }

  export type NestedEnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SubjectCreateWithoutUserInput = {
    id?: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    studyPlans?: StudyPlanCreateNestedManyWithoutSubjectInput
    quizQuestions?: QuizQuestionCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutSubjectInput
    quizQuestions?: QuizQuestionUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutUserInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput>
  }

  export type SubjectCreateManyUserInputEnvelope = {
    data: SubjectCreateManyUserInput | SubjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudyPlanCreateWithoutUserInput = {
    id?: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    subject: SubjectCreateNestedOneWithoutStudyPlansInput
    studySessions?: StudySessionCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusCreateNestedManyWithoutPlanInput
    milestones?: MilestoneCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutUserInput = {
    id?: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusUncheckedCreateNestedManyWithoutPlanInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput>
  }

  export type StudyPlanCreateManyUserInputEnvelope = {
    data: StudyPlanCreateManyUserInput | StudyPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudySessionCreateWithoutUserInput = {
    id?: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
    plan: StudyPlanCreateNestedOneWithoutStudySessionsInput
  }

  export type StudySessionUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
  }

  export type StudySessionCreateOrConnectWithoutUserInput = {
    where: StudySessionWhereUniqueInput
    create: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput>
  }

  export type StudySessionCreateManyUserInputEnvelope = {
    data: StudySessionCreateManyUserInput | StudySessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
    plan?: StudyPlanCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateWithoutUserInput = {
    id?: string
    planId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type MilestoneCreateOrConnectWithoutUserInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutUserInput, MilestoneUncheckedCreateWithoutUserInput>
  }

  export type MilestoneCreateManyUserInputEnvelope = {
    data: MilestoneCreateManyUserInput | MilestoneCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizAttemptCreateWithoutUserInput = {
    id?: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
    quizAttemptQuestions?: QuizAttemptQuestionCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedCreateNestedManyWithoutQuizAttemptInput
  }

  export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptCreateManyUserInputEnvelope = {
    data: QuizAttemptCreateManyUserInput | QuizAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgressTrackingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    studyMinutes?: number
    completedSessions?: number
    missedSessions?: number
    currentStreak?: number
    simbiState?: string
    motivationLevel?: number
    lastInteraction?: Date | string | null
  }

  export type ProgressTrackingUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    studyMinutes?: number
    completedSessions?: number
    missedSessions?: number
    currentStreak?: number
    simbiState?: string
    motivationLevel?: number
    lastInteraction?: Date | string | null
  }

  export type ProgressTrackingCreateOrConnectWithoutUserInput = {
    where: ProgressTrackingWhereUniqueInput
    create: XOR<ProgressTrackingCreateWithoutUserInput, ProgressTrackingUncheckedCreateWithoutUserInput>
  }

  export type ProgressTrackingCreateManyUserInputEnvelope = {
    data: ProgressTrackingCreateManyUserInput | ProgressTrackingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutUserInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutUserInput, SubjectUncheckedUpdateWithoutUserInput>
    create: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutUserInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutUserInput, SubjectUncheckedUpdateWithoutUserInput>
  }

  export type SubjectUpdateManyWithWhereWithoutUserInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutUserInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    userId?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    educationLevel?: StringFilter<"Subject"> | string
    educationYear?: IntNullableFilter<"Subject"> | number | null
    colorCode?: StringFilter<"Subject"> | string
    difficultyLevel?: IntFilter<"Subject"> | number
    priority?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type StudyPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    update: XOR<StudyPlanUpdateWithoutUserInput, StudyPlanUncheckedUpdateWithoutUserInput>
    create: XOR<StudyPlanCreateWithoutUserInput, StudyPlanUncheckedCreateWithoutUserInput>
  }

  export type StudyPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyPlanWhereUniqueInput
    data: XOR<StudyPlanUpdateWithoutUserInput, StudyPlanUncheckedUpdateWithoutUserInput>
  }

  export type StudyPlanUpdateManyWithWhereWithoutUserInput = {
    where: StudyPlanScalarWhereInput
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type StudyPlanScalarWhereInput = {
    AND?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    OR?: StudyPlanScalarWhereInput[]
    NOT?: StudyPlanScalarWhereInput | StudyPlanScalarWhereInput[]
    id?: StringFilter<"StudyPlan"> | string
    userId?: StringFilter<"StudyPlan"> | string
    subjectId?: StringFilter<"StudyPlan"> | string
    planName?: StringFilter<"StudyPlan"> | string
    dailyTargetMinutes?: IntFilter<"StudyPlan"> | number
    startDate?: DateTimeFilter<"StudyPlan"> | Date | string
    endDate?: DateTimeFilter<"StudyPlan"> | Date | string
    createdAt?: DateTimeFilter<"StudyPlan"> | Date | string
    lastUpdated?: DateTimeFilter<"StudyPlan"> | Date | string
    status?: EnumPlanStatusFilter<"StudyPlan"> | $Enums.PlanStatus
  }

  export type StudySessionUpsertWithWhereUniqueWithoutUserInput = {
    where: StudySessionWhereUniqueInput
    update: XOR<StudySessionUpdateWithoutUserInput, StudySessionUncheckedUpdateWithoutUserInput>
    create: XOR<StudySessionCreateWithoutUserInput, StudySessionUncheckedCreateWithoutUserInput>
  }

  export type StudySessionUpdateWithWhereUniqueWithoutUserInput = {
    where: StudySessionWhereUniqueInput
    data: XOR<StudySessionUpdateWithoutUserInput, StudySessionUncheckedUpdateWithoutUserInput>
  }

  export type StudySessionUpdateManyWithWhereWithoutUserInput = {
    where: StudySessionScalarWhereInput
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyWithoutUserInput>
  }

  export type StudySessionScalarWhereInput = {
    AND?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
    OR?: StudySessionScalarWhereInput[]
    NOT?: StudySessionScalarWhereInput | StudySessionScalarWhereInput[]
    id?: StringFilter<"StudySession"> | string
    planId?: StringFilter<"StudySession"> | string
    userId?: StringFilter<"StudySession"> | string
    sessionDate?: DateTimeFilter<"StudySession"> | Date | string
    startTime?: DateTimeFilter<"StudySession"> | Date | string
    endTime?: DateTimeFilter<"StudySession"> | Date | string
    durationMinutes?: IntFilter<"StudySession"> | number
    notes?: StringNullableFilter<"StudySession"> | string | null
    productivityRating?: IntNullableFilter<"StudySession"> | number | null
    simbiReaction?: StringFilter<"StudySession"> | string
  }

  export type MilestoneUpsertWithWhereUniqueWithoutUserInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutUserInput, MilestoneUncheckedUpdateWithoutUserInput>
    create: XOR<MilestoneCreateWithoutUserInput, MilestoneUncheckedCreateWithoutUserInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutUserInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutUserInput, MilestoneUncheckedUpdateWithoutUserInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutUserInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutUserInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    userId?: StringFilter<"Milestone"> | string
    planId?: StringNullableFilter<"Milestone"> | string | null
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    completionCriteria?: StringNullableFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    completedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    subjectId?: StringFilter<"QuizAttempt"> | string
    startTime?: DateTimeFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    totalQuestions?: IntFilter<"QuizAttempt"> | number
    correctAnswers?: IntFilter<"QuizAttempt"> | number
    scorePercentage?: DecimalFilter<"QuizAttempt"> | Decimal | DecimalJsLike | number | string
  }

  export type ProgressTrackingUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressTrackingWhereUniqueInput
    update: XOR<ProgressTrackingUpdateWithoutUserInput, ProgressTrackingUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressTrackingCreateWithoutUserInput, ProgressTrackingUncheckedCreateWithoutUserInput>
  }

  export type ProgressTrackingUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressTrackingWhereUniqueInput
    data: XOR<ProgressTrackingUpdateWithoutUserInput, ProgressTrackingUncheckedUpdateWithoutUserInput>
  }

  export type ProgressTrackingUpdateManyWithWhereWithoutUserInput = {
    where: ProgressTrackingScalarWhereInput
    data: XOR<ProgressTrackingUpdateManyMutationInput, ProgressTrackingUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressTrackingScalarWhereInput = {
    AND?: ProgressTrackingScalarWhereInput | ProgressTrackingScalarWhereInput[]
    OR?: ProgressTrackingScalarWhereInput[]
    NOT?: ProgressTrackingScalarWhereInput | ProgressTrackingScalarWhereInput[]
    id?: StringFilter<"ProgressTracking"> | string
    userId?: StringFilter<"ProgressTracking"> | string
    date?: DateTimeFilter<"ProgressTracking"> | Date | string
    studyMinutes?: IntFilter<"ProgressTracking"> | number
    completedSessions?: IntFilter<"ProgressTracking"> | number
    missedSessions?: IntFilter<"ProgressTracking"> | number
    currentStreak?: IntFilter<"ProgressTracking"> | number
    simbiState?: StringFilter<"ProgressTracking"> | string
    motivationLevel?: IntFilter<"ProgressTracking"> | number
    lastInteraction?: DateTimeNullableFilter<"ProgressTracking"> | Date | string | null
  }

  export type UserCreateWithoutSubjectsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    milestones?: MilestoneCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubjectsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
  }

  export type StudyPlanCreateWithoutSubjectInput = {
    id?: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    user: UserCreateNestedOneWithoutStudyPlansInput
    studySessions?: StudySessionCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusCreateNestedManyWithoutPlanInput
    milestones?: MilestoneCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutSubjectInput = {
    id?: string
    userId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusUncheckedCreateNestedManyWithoutPlanInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutSubjectInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutSubjectInput, StudyPlanUncheckedCreateWithoutSubjectInput>
  }

  export type StudyPlanCreateManySubjectInputEnvelope = {
    data: StudyPlanCreateManySubjectInput | StudyPlanCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type QuizQuestionCreateWithoutSubjectInput = {
    id?: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
    quizAttemptQuestions?: QuizAttemptQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutSubjectInput = {
    id?: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutSubjectInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutSubjectInput, QuizQuestionUncheckedCreateWithoutSubjectInput>
  }

  export type QuizQuestionCreateManySubjectInputEnvelope = {
    data: QuizQuestionCreateManySubjectInput | QuizQuestionCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubjectsInput = {
    update: XOR<UserUpdateWithoutSubjectsInput, UserUncheckedUpdateWithoutSubjectsInput>
    create: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubjectsInput, UserUncheckedUpdateWithoutSubjectsInput>
  }

  export type UserUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudyPlanUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudyPlanWhereUniqueInput
    update: XOR<StudyPlanUpdateWithoutSubjectInput, StudyPlanUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudyPlanCreateWithoutSubjectInput, StudyPlanUncheckedCreateWithoutSubjectInput>
  }

  export type StudyPlanUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudyPlanWhereUniqueInput
    data: XOR<StudyPlanUpdateWithoutSubjectInput, StudyPlanUncheckedUpdateWithoutSubjectInput>
  }

  export type StudyPlanUpdateManyWithWhereWithoutSubjectInput = {
    where: StudyPlanScalarWhereInput
    data: XOR<StudyPlanUpdateManyMutationInput, StudyPlanUncheckedUpdateManyWithoutSubjectInput>
  }

  export type QuizQuestionUpsertWithWhereUniqueWithoutSubjectInput = {
    where: QuizQuestionWhereUniqueInput
    update: XOR<QuizQuestionUpdateWithoutSubjectInput, QuizQuestionUncheckedUpdateWithoutSubjectInput>
    create: XOR<QuizQuestionCreateWithoutSubjectInput, QuizQuestionUncheckedCreateWithoutSubjectInput>
  }

  export type QuizQuestionUpdateWithWhereUniqueWithoutSubjectInput = {
    where: QuizQuestionWhereUniqueInput
    data: XOR<QuizQuestionUpdateWithoutSubjectInput, QuizQuestionUncheckedUpdateWithoutSubjectInput>
  }

  export type QuizQuestionUpdateManyWithWhereWithoutSubjectInput = {
    where: QuizQuestionScalarWhereInput
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyWithoutSubjectInput>
  }

  export type QuizQuestionScalarWhereInput = {
    AND?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    OR?: QuizQuestionScalarWhereInput[]
    NOT?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    subjectId?: StringFilter<"QuizQuestion"> | string
    userId?: StringNullableFilter<"QuizQuestion"> | string | null
    questionText?: StringFilter<"QuizQuestion"> | string
    questionType?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    difficulty?: IntFilter<"QuizQuestion"> | number
    options?: JsonNullableFilter<"QuizQuestion">
    correctAnswer?: StringFilter<"QuizQuestion"> | string
    explanation?: StringNullableFilter<"QuizQuestion"> | string | null
    createdAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    aiGenerated?: BoolFilter<"QuizQuestion"> | boolean
  }

  export type UserCreateWithoutStudyPlansInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    milestones?: MilestoneCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudyPlansInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudyPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
  }

  export type SubjectCreateWithoutStudyPlansInput = {
    id?: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubjectsInput
    quizQuestions?: QuizQuestionCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudyPlansInput = {
    id?: string
    userId: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    quizQuestions?: QuizQuestionUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudyPlansInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudyPlansInput, SubjectUncheckedCreateWithoutStudyPlansInput>
  }

  export type StudySessionCreateWithoutPlanInput = {
    id?: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
    user: UserCreateNestedOneWithoutStudySessionsInput
  }

  export type StudySessionUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
  }

  export type StudySessionCreateOrConnectWithoutPlanInput = {
    where: StudySessionWhereUniqueInput
    create: XOR<StudySessionCreateWithoutPlanInput, StudySessionUncheckedCreateWithoutPlanInput>
  }

  export type StudySessionCreateManyPlanInputEnvelope = {
    data: StudySessionCreateManyPlanInput | StudySessionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PlanDailyStatusCreateWithoutPlanInput = {
    id?: string
    date: Date | string
    totalMinutesStudied?: number
    targetAchieved?: boolean
    status: $Enums.DailyStatus
  }

  export type PlanDailyStatusUncheckedCreateWithoutPlanInput = {
    id?: string
    date: Date | string
    totalMinutesStudied?: number
    targetAchieved?: boolean
    status: $Enums.DailyStatus
  }

  export type PlanDailyStatusCreateOrConnectWithoutPlanInput = {
    where: PlanDailyStatusWhereUniqueInput
    create: XOR<PlanDailyStatusCreateWithoutPlanInput, PlanDailyStatusUncheckedCreateWithoutPlanInput>
  }

  export type PlanDailyStatusCreateManyPlanInputEnvelope = {
    data: PlanDailyStatusCreateManyPlanInput | PlanDailyStatusCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneCreateWithoutPlanInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type MilestoneCreateOrConnectWithoutPlanInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutPlanInput, MilestoneUncheckedCreateWithoutPlanInput>
  }

  export type MilestoneCreateManyPlanInputEnvelope = {
    data: MilestoneCreateManyPlanInput | MilestoneCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudyPlansInput = {
    update: XOR<UserUpdateWithoutStudyPlansInput, UserUncheckedUpdateWithoutStudyPlansInput>
    create: XOR<UserCreateWithoutStudyPlansInput, UserUncheckedCreateWithoutStudyPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudyPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudyPlansInput, UserUncheckedUpdateWithoutStudyPlansInput>
  }

  export type UserUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubjectUpsertWithoutStudyPlansInput = {
    update: XOR<SubjectUpdateWithoutStudyPlansInput, SubjectUncheckedUpdateWithoutStudyPlansInput>
    create: XOR<SubjectCreateWithoutStudyPlansInput, SubjectUncheckedCreateWithoutStudyPlansInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutStudyPlansInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutStudyPlansInput, SubjectUncheckedUpdateWithoutStudyPlansInput>
  }

  export type SubjectUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput
    quizQuestions?: QuizQuestionUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizQuestions?: QuizQuestionUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type StudySessionUpsertWithWhereUniqueWithoutPlanInput = {
    where: StudySessionWhereUniqueInput
    update: XOR<StudySessionUpdateWithoutPlanInput, StudySessionUncheckedUpdateWithoutPlanInput>
    create: XOR<StudySessionCreateWithoutPlanInput, StudySessionUncheckedCreateWithoutPlanInput>
  }

  export type StudySessionUpdateWithWhereUniqueWithoutPlanInput = {
    where: StudySessionWhereUniqueInput
    data: XOR<StudySessionUpdateWithoutPlanInput, StudySessionUncheckedUpdateWithoutPlanInput>
  }

  export type StudySessionUpdateManyWithWhereWithoutPlanInput = {
    where: StudySessionScalarWhereInput
    data: XOR<StudySessionUpdateManyMutationInput, StudySessionUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanDailyStatusUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanDailyStatusWhereUniqueInput
    update: XOR<PlanDailyStatusUpdateWithoutPlanInput, PlanDailyStatusUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanDailyStatusCreateWithoutPlanInput, PlanDailyStatusUncheckedCreateWithoutPlanInput>
  }

  export type PlanDailyStatusUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanDailyStatusWhereUniqueInput
    data: XOR<PlanDailyStatusUpdateWithoutPlanInput, PlanDailyStatusUncheckedUpdateWithoutPlanInput>
  }

  export type PlanDailyStatusUpdateManyWithWhereWithoutPlanInput = {
    where: PlanDailyStatusScalarWhereInput
    data: XOR<PlanDailyStatusUpdateManyMutationInput, PlanDailyStatusUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanDailyStatusScalarWhereInput = {
    AND?: PlanDailyStatusScalarWhereInput | PlanDailyStatusScalarWhereInput[]
    OR?: PlanDailyStatusScalarWhereInput[]
    NOT?: PlanDailyStatusScalarWhereInput | PlanDailyStatusScalarWhereInput[]
    id?: StringFilter<"PlanDailyStatus"> | string
    planId?: StringFilter<"PlanDailyStatus"> | string
    date?: DateTimeFilter<"PlanDailyStatus"> | Date | string
    totalMinutesStudied?: IntFilter<"PlanDailyStatus"> | number
    targetAchieved?: BoolFilter<"PlanDailyStatus"> | boolean
    status?: EnumDailyStatusFilter<"PlanDailyStatus"> | $Enums.DailyStatus
  }

  export type MilestoneUpsertWithWhereUniqueWithoutPlanInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutPlanInput, MilestoneUncheckedUpdateWithoutPlanInput>
    create: XOR<MilestoneCreateWithoutPlanInput, MilestoneUncheckedCreateWithoutPlanInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutPlanInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutPlanInput, MilestoneUncheckedUpdateWithoutPlanInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutPlanInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutPlanInput>
  }

  export type StudyPlanCreateWithoutStudySessionsInput = {
    id?: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    user: UserCreateNestedOneWithoutStudyPlansInput
    subject: SubjectCreateNestedOneWithoutStudyPlansInput
    planDailyStatus?: PlanDailyStatusCreateNestedManyWithoutPlanInput
    milestones?: MilestoneCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutStudySessionsInput = {
    id?: string
    userId: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    planDailyStatus?: PlanDailyStatusUncheckedCreateNestedManyWithoutPlanInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutStudySessionsInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutStudySessionsInput, StudyPlanUncheckedCreateWithoutStudySessionsInput>
  }

  export type UserCreateWithoutStudySessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    milestones?: MilestoneCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudySessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudySessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
  }

  export type StudyPlanUpsertWithoutStudySessionsInput = {
    update: XOR<StudyPlanUpdateWithoutStudySessionsInput, StudyPlanUncheckedUpdateWithoutStudySessionsInput>
    create: XOR<StudyPlanCreateWithoutStudySessionsInput, StudyPlanUncheckedCreateWithoutStudySessionsInput>
    where?: StudyPlanWhereInput
  }

  export type StudyPlanUpdateToOneWithWhereWithoutStudySessionsInput = {
    where?: StudyPlanWhereInput
    data: XOR<StudyPlanUpdateWithoutStudySessionsInput, StudyPlanUncheckedUpdateWithoutStudySessionsInput>
  }

  export type StudyPlanUpdateWithoutStudySessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudyPlansNestedInput
    planDailyStatus?: PlanDailyStatusUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutStudySessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    planDailyStatus?: PlanDailyStatusUncheckedUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserUpsertWithoutStudySessionsInput = {
    update: XOR<UserUpdateWithoutStudySessionsInput, UserUncheckedUpdateWithoutStudySessionsInput>
    create: XOR<UserCreateWithoutStudySessionsInput, UserUncheckedCreateWithoutStudySessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudySessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudySessionsInput, UserUncheckedUpdateWithoutStudySessionsInput>
  }

  export type UserUpdateWithoutStudySessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudySessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudyPlanCreateWithoutPlanDailyStatusInput = {
    id?: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    user: UserCreateNestedOneWithoutStudyPlansInput
    subject: SubjectCreateNestedOneWithoutStudyPlansInput
    studySessions?: StudySessionCreateNestedManyWithoutPlanInput
    milestones?: MilestoneCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutPlanDailyStatusInput = {
    id?: string
    userId: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutPlanInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutPlanDailyStatusInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutPlanDailyStatusInput, StudyPlanUncheckedCreateWithoutPlanDailyStatusInput>
  }

  export type StudyPlanUpsertWithoutPlanDailyStatusInput = {
    update: XOR<StudyPlanUpdateWithoutPlanDailyStatusInput, StudyPlanUncheckedUpdateWithoutPlanDailyStatusInput>
    create: XOR<StudyPlanCreateWithoutPlanDailyStatusInput, StudyPlanUncheckedCreateWithoutPlanDailyStatusInput>
    where?: StudyPlanWhereInput
  }

  export type StudyPlanUpdateToOneWithWhereWithoutPlanDailyStatusInput = {
    where?: StudyPlanWhereInput
    data: XOR<StudyPlanUpdateWithoutPlanDailyStatusInput, StudyPlanUncheckedUpdateWithoutPlanDailyStatusInput>
  }

  export type StudyPlanUpdateWithoutPlanDailyStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudyPlansNestedInput
    studySessions?: StudySessionUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutPlanDailyStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    studySessions?: StudySessionUncheckedUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutMilestonesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMilestonesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMilestonesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMilestonesInput, UserUncheckedCreateWithoutMilestonesInput>
  }

  export type StudyPlanCreateWithoutMilestonesInput = {
    id?: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    user: UserCreateNestedOneWithoutStudyPlansInput
    subject: SubjectCreateNestedOneWithoutStudyPlansInput
    studySessions?: StudySessionCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanUncheckedCreateWithoutMilestonesInput = {
    id?: string
    userId: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutPlanInput
    planDailyStatus?: PlanDailyStatusUncheckedCreateNestedManyWithoutPlanInput
  }

  export type StudyPlanCreateOrConnectWithoutMilestonesInput = {
    where: StudyPlanWhereUniqueInput
    create: XOR<StudyPlanCreateWithoutMilestonesInput, StudyPlanUncheckedCreateWithoutMilestonesInput>
  }

  export type UserUpsertWithoutMilestonesInput = {
    update: XOR<UserUpdateWithoutMilestonesInput, UserUncheckedUpdateWithoutMilestonesInput>
    create: XOR<UserCreateWithoutMilestonesInput, UserUncheckedCreateWithoutMilestonesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMilestonesInput, UserUncheckedUpdateWithoutMilestonesInput>
  }

  export type UserUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudyPlanUpsertWithoutMilestonesInput = {
    update: XOR<StudyPlanUpdateWithoutMilestonesInput, StudyPlanUncheckedUpdateWithoutMilestonesInput>
    create: XOR<StudyPlanCreateWithoutMilestonesInput, StudyPlanUncheckedCreateWithoutMilestonesInput>
    where?: StudyPlanWhereInput
  }

  export type StudyPlanUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: StudyPlanWhereInput
    data: XOR<StudyPlanUpdateWithoutMilestonesInput, StudyPlanUncheckedUpdateWithoutMilestonesInput>
  }

  export type StudyPlanUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudyPlansNestedInput
    studySessions?: StudySessionUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    studySessions?: StudySessionUncheckedUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubjectCreateWithoutQuizQuestionsInput = {
    id?: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubjectsInput
    studyPlans?: StudyPlanCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutQuizQuestionsInput = {
    id?: string
    userId: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutQuizQuestionsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutQuizQuestionsInput, SubjectUncheckedCreateWithoutQuizQuestionsInput>
  }

  export type QuizAttemptQuestionCreateWithoutQuestionInput = {
    id?: string
    userAnswer?: string | null
    isCorrect?: boolean | null
    quizAttempt: QuizAttemptCreateNestedOneWithoutQuizAttemptQuestionsInput
  }

  export type QuizAttemptQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    quizAttemptId: string
    userAnswer?: string | null
    isCorrect?: boolean | null
  }

  export type QuizAttemptQuestionCreateOrConnectWithoutQuestionInput = {
    where: QuizAttemptQuestionWhereUniqueInput
    create: XOR<QuizAttemptQuestionCreateWithoutQuestionInput, QuizAttemptQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizAttemptQuestionCreateManyQuestionInputEnvelope = {
    data: QuizAttemptQuestionCreateManyQuestionInput | QuizAttemptQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithoutQuizQuestionsInput = {
    update: XOR<SubjectUpdateWithoutQuizQuestionsInput, SubjectUncheckedUpdateWithoutQuizQuestionsInput>
    create: XOR<SubjectCreateWithoutQuizQuestionsInput, SubjectUncheckedCreateWithoutQuizQuestionsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutQuizQuestionsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutQuizQuestionsInput, SubjectUncheckedUpdateWithoutQuizQuestionsInput>
  }

  export type SubjectUpdateWithoutQuizQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutQuizQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuizAttemptQuestionWhereUniqueInput
    update: XOR<QuizAttemptQuestionUpdateWithoutQuestionInput, QuizAttemptQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizAttemptQuestionCreateWithoutQuestionInput, QuizAttemptQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuizAttemptQuestionWhereUniqueInput
    data: XOR<QuizAttemptQuestionUpdateWithoutQuestionInput, QuizAttemptQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizAttemptQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuizAttemptQuestionScalarWhereInput
    data: XOR<QuizAttemptQuestionUpdateManyMutationInput, QuizAttemptQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuizAttemptQuestionScalarWhereInput = {
    AND?: QuizAttemptQuestionScalarWhereInput | QuizAttemptQuestionScalarWhereInput[]
    OR?: QuizAttemptQuestionScalarWhereInput[]
    NOT?: QuizAttemptQuestionScalarWhereInput | QuizAttemptQuestionScalarWhereInput[]
    id?: StringFilter<"QuizAttemptQuestion"> | string
    quizAttemptId?: StringFilter<"QuizAttemptQuestion"> | string
    questionId?: StringFilter<"QuizAttemptQuestion"> | string
    userAnswer?: StringNullableFilter<"QuizAttemptQuestion"> | string | null
    isCorrect?: BoolNullableFilter<"QuizAttemptQuestion"> | boolean | null
  }

  export type UserCreateWithoutQuizAttemptsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    milestones?: MilestoneCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizAttemptsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutUserInput
    progressTracking?: ProgressTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type QuizAttemptQuestionCreateWithoutQuizAttemptInput = {
    id?: string
    userAnswer?: string | null
    isCorrect?: boolean | null
    question: QuizQuestionCreateNestedOneWithoutQuizAttemptQuestionsInput
  }

  export type QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput = {
    id?: string
    questionId: string
    userAnswer?: string | null
    isCorrect?: boolean | null
  }

  export type QuizAttemptQuestionCreateOrConnectWithoutQuizAttemptInput = {
    where: QuizAttemptQuestionWhereUniqueInput
    create: XOR<QuizAttemptQuestionCreateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput>
  }

  export type QuizAttemptQuestionCreateManyQuizAttemptInputEnvelope = {
    data: QuizAttemptQuestionCreateManyQuizAttemptInput | QuizAttemptQuestionCreateManyQuizAttemptInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuizAttemptsInput = {
    update: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutUserNestedInput
    progressTracking?: ProgressTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizAttemptQuestionUpsertWithWhereUniqueWithoutQuizAttemptInput = {
    where: QuizAttemptQuestionWhereUniqueInput
    update: XOR<QuizAttemptQuestionUpdateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedUpdateWithoutQuizAttemptInput>
    create: XOR<QuizAttemptQuestionCreateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedCreateWithoutQuizAttemptInput>
  }

  export type QuizAttemptQuestionUpdateWithWhereUniqueWithoutQuizAttemptInput = {
    where: QuizAttemptQuestionWhereUniqueInput
    data: XOR<QuizAttemptQuestionUpdateWithoutQuizAttemptInput, QuizAttemptQuestionUncheckedUpdateWithoutQuizAttemptInput>
  }

  export type QuizAttemptQuestionUpdateManyWithWhereWithoutQuizAttemptInput = {
    where: QuizAttemptQuestionScalarWhereInput
    data: XOR<QuizAttemptQuestionUpdateManyMutationInput, QuizAttemptQuestionUncheckedUpdateManyWithoutQuizAttemptInput>
  }

  export type QuizAttemptCreateWithoutQuizAttemptQuestionsInput = {
    id?: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutQuizAttemptQuestionsInput = {
    id?: string
    userId: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
  }

  export type QuizAttemptCreateOrConnectWithoutQuizAttemptQuestionsInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutQuizAttemptQuestionsInput, QuizAttemptUncheckedCreateWithoutQuizAttemptQuestionsInput>
  }

  export type QuizQuestionCreateWithoutQuizAttemptQuestionsInput = {
    id?: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
    subject: SubjectCreateNestedOneWithoutQuizQuestionsInput
  }

  export type QuizQuestionUncheckedCreateWithoutQuizAttemptQuestionsInput = {
    id?: string
    subjectId: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
  }

  export type QuizQuestionCreateOrConnectWithoutQuizAttemptQuestionsInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutQuizAttemptQuestionsInput, QuizQuestionUncheckedCreateWithoutQuizAttemptQuestionsInput>
  }

  export type QuizAttemptUpsertWithoutQuizAttemptQuestionsInput = {
    update: XOR<QuizAttemptUpdateWithoutQuizAttemptQuestionsInput, QuizAttemptUncheckedUpdateWithoutQuizAttemptQuestionsInput>
    create: XOR<QuizAttemptCreateWithoutQuizAttemptQuestionsInput, QuizAttemptUncheckedCreateWithoutQuizAttemptQuestionsInput>
    where?: QuizAttemptWhereInput
  }

  export type QuizAttemptUpdateToOneWithWhereWithoutQuizAttemptQuestionsInput = {
    where?: QuizAttemptWhereInput
    data: XOR<QuizAttemptUpdateWithoutQuizAttemptQuestionsInput, QuizAttemptUncheckedUpdateWithoutQuizAttemptQuestionsInput>
  }

  export type QuizAttemptUpdateWithoutQuizAttemptQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutQuizAttemptQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type QuizQuestionUpsertWithoutQuizAttemptQuestionsInput = {
    update: XOR<QuizQuestionUpdateWithoutQuizAttemptQuestionsInput, QuizQuestionUncheckedUpdateWithoutQuizAttemptQuestionsInput>
    create: XOR<QuizQuestionCreateWithoutQuizAttemptQuestionsInput, QuizQuestionUncheckedCreateWithoutQuizAttemptQuestionsInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutQuizAttemptQuestionsInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutQuizAttemptQuestionsInput, QuizQuestionUncheckedUpdateWithoutQuizAttemptQuestionsInput>
  }

  export type QuizQuestionUpdateWithoutQuizAttemptQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
    subject?: SubjectUpdateOneRequiredWithoutQuizQuestionsNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutQuizAttemptQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutProgressTrackingInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanCreateNestedManyWithoutUserInput
    studySessions?: StudySessionCreateNestedManyWithoutUserInput
    milestones?: MilestoneCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressTrackingInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    educationLevel?: string | null
    timezone?: string | null
    preferredStudyMethod?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
    studyPlans?: StudyPlanUncheckedCreateNestedManyWithoutUserInput
    studySessions?: StudySessionUncheckedCreateNestedManyWithoutUserInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressTrackingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressTrackingInput, UserUncheckedCreateWithoutProgressTrackingInput>
  }

  export type UserUpsertWithoutProgressTrackingInput = {
    update: XOR<UserUpdateWithoutProgressTrackingInput, UserUncheckedUpdateWithoutProgressTrackingInput>
    create: XOR<UserCreateWithoutProgressTrackingInput, UserUncheckedCreateWithoutProgressTrackingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressTrackingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressTrackingInput, UserUncheckedUpdateWithoutProgressTrackingInput>
  }

  export type UserUpdateWithoutProgressTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStudyMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutUserNestedInput
    studySessions?: StudySessionUncheckedUpdateManyWithoutUserNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubjectCreateManyUserInput = {
    id?: string
    name: string
    educationLevel: string
    educationYear?: number | null
    colorCode?: string
    difficultyLevel?: number
    priority?: number
    createdAt?: Date | string
  }

  export type StudyPlanCreateManyUserInput = {
    id?: string
    subjectId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
  }

  export type StudySessionCreateManyUserInput = {
    id?: string
    planId: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
  }

  export type MilestoneCreateManyUserInput = {
    id?: string
    planId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type QuizAttemptCreateManyUserInput = {
    id?: string
    subjectId: string
    startTime?: Date | string
    endTime?: Date | string | null
    totalQuestions: number
    correctAnswers?: number
    scorePercentage?: Decimal | DecimalJsLike | number | string
  }

  export type ProgressTrackingCreateManyUserInput = {
    id?: string
    date: Date | string
    studyMinutes?: number
    completedSessions?: number
    missedSessions?: number
    currentStreak?: number
    simbiState?: string
    motivationLevel?: number
    lastInteraction?: Date | string | null
  }

  export type SubjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUpdateManyWithoutSubjectNestedInput
    quizQuestions?: QuizQuestionUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyPlans?: StudyPlanUncheckedUpdateManyWithoutSubjectNestedInput
    quizQuestions?: QuizQuestionUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationYear?: NullableIntFieldUpdateOperationsInput | number | null
    colorCode?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    subject?: SubjectUpdateOneRequiredWithoutStudyPlansNestedInput
    studySessions?: StudySessionUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    studySessions?: StudySessionUncheckedUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUncheckedUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
  }

  export type StudySessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
    plan?: StudyPlanUpdateOneRequiredWithoutStudySessionsNestedInput
  }

  export type StudySessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type StudySessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: StudyPlanUpdateOneWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MilestoneUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quizAttemptQuestions?: QuizAttemptQuestionUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedUpdateManyWithoutQuizAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    scorePercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProgressTrackingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressTrackingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressTrackingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    studyMinutes?: IntFieldUpdateOperationsInput | number
    completedSessions?: IntFieldUpdateOperationsInput | number
    missedSessions?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    simbiState?: StringFieldUpdateOperationsInput | string
    motivationLevel?: IntFieldUpdateOperationsInput | number
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudyPlanCreateManySubjectInput = {
    id?: string
    userId: string
    planName: string
    dailyTargetMinutes: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    lastUpdated?: Date | string
    status?: $Enums.PlanStatus
  }

  export type QuizQuestionCreateManySubjectInput = {
    id?: string
    userId?: string | null
    questionText: string
    questionType: $Enums.QuestionType
    difficulty?: number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    aiGenerated?: boolean
  }

  export type StudyPlanUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    user?: UserUpdateOneRequiredWithoutStudyPlansNestedInput
    studySessions?: StudySessionUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    studySessions?: StudySessionUncheckedUpdateManyWithoutPlanNestedInput
    planDailyStatus?: PlanDailyStatusUncheckedUpdateManyWithoutPlanNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type StudyPlanUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    dailyTargetMinutes?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
  }

  export type QuizQuestionUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
    quizAttemptQuestions?: QuizAttemptQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
    quizAttemptQuestions?: QuizAttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    questionText?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudySessionCreateManyPlanInput = {
    id?: string
    userId: string
    sessionDate: Date | string
    startTime: Date | string
    endTime: Date | string
    durationMinutes: number
    notes?: string | null
    productivityRating?: number | null
    simbiReaction?: string
  }

  export type PlanDailyStatusCreateManyPlanInput = {
    id?: string
    date: Date | string
    totalMinutesStudied?: number
    targetAchieved?: boolean
    status: $Enums.DailyStatus
  }

  export type MilestoneCreateManyPlanInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    completionCriteria?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type StudySessionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudySessionsNestedInput
  }

  export type StudySessionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type StudySessionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productivityRating?: NullableIntFieldUpdateOperationsInput | number | null
    simbiReaction?: StringFieldUpdateOperationsInput | string
  }

  export type PlanDailyStatusUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
  }

  export type PlanDailyStatusUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
  }

  export type PlanDailyStatusUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMinutesStudied?: IntFieldUpdateOperationsInput | number
    targetAchieved?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumDailyStatusFieldUpdateOperationsInput | $Enums.DailyStatus
  }

  export type MilestoneUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MilestoneUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizAttemptQuestionCreateManyQuestionInput = {
    id?: string
    quizAttemptId: string
    userAnswer?: string | null
    isCorrect?: boolean | null
  }

  export type QuizAttemptQuestionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quizAttempt?: QuizAttemptUpdateOneRequiredWithoutQuizAttemptQuestionsNestedInput
  }

  export type QuizAttemptQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizAttemptId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizAttemptQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizAttemptId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizAttemptQuestionCreateManyQuizAttemptInput = {
    id?: string
    questionId: string
    userAnswer?: string | null
    isCorrect?: boolean | null
  }

  export type QuizAttemptQuestionUpdateWithoutQuizAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question?: QuizQuestionUpdateOneRequiredWithoutQuizAttemptQuestionsNestedInput
  }

  export type QuizAttemptQuestionUncheckedUpdateWithoutQuizAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizAttemptQuestionUncheckedUpdateManyWithoutQuizAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}