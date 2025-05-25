
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
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Emails
 * const emails = await prisma.email.findMany()
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
   * // Fetch zero or more Emails
   * const emails = await prisma.email.findMany()
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
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Email: 'Email',
    Attachment: 'Attachment'
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
      modelProps: "email" | "attachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
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
    email?: EmailOmit
    attachment?: AttachmentOmit
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
   * Count Type EmailCountOutputType
   */

  export type EmailCountOutputType = {
    attachments: number
  }

  export type EmailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | EmailCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCountOutputType
     */
    select?: EmailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    threadId: string | null
    subject: string | null
    from: string | null
    receivedAt: Date | null
    textContent: string | null
    htmlContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    threadId: string | null
    subject: string | null
    from: string | null
    receivedAt: Date | null
    textContent: string | null
    htmlContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    threadId: number
    subject: number
    from: number
    to: number
    cc: number
    bcc: number
    receivedAt: number
    headers: number
    textContent: number
    htmlContent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailMinAggregateInputType = {
    id?: true
    threadId?: true
    subject?: true
    from?: true
    receivedAt?: true
    textContent?: true
    htmlContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    threadId?: true
    subject?: true
    from?: true
    receivedAt?: true
    textContent?: true
    htmlContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    threadId?: true
    subject?: true
    from?: true
    to?: true
    cc?: true
    bcc?: true
    receivedAt?: true
    headers?: true
    textContent?: true
    htmlContent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    threadId: string
    subject: string
    from: string
    to: string[]
    cc: string[]
    bcc: string[]
    receivedAt: Date
    headers: JsonValue
    textContent: string | null
    htmlContent: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    subject?: boolean
    from?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    receivedAt?: boolean
    headers?: boolean
    textContent?: boolean
    htmlContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attachments?: boolean | Email$attachmentsArgs<ExtArgs>
    _count?: boolean | EmailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    subject?: boolean
    from?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    receivedAt?: boolean
    headers?: boolean
    textContent?: boolean
    htmlContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    subject?: boolean
    from?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    receivedAt?: boolean
    headers?: boolean
    textContent?: boolean
    htmlContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    threadId?: boolean
    subject?: boolean
    from?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    receivedAt?: boolean
    headers?: boolean
    textContent?: boolean
    htmlContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "subject" | "from" | "to" | "cc" | "bcc" | "receivedAt" | "headers" | "textContent" | "htmlContent" | "createdAt" | "updatedAt", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | Email$attachmentsArgs<ExtArgs>
    _count?: boolean | EmailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      threadId: string
      subject: string
      from: string
      to: string[]
      cc: string[]
      bcc: string[]
      receivedAt: Date
      headers: Prisma.JsonValue
      textContent: string | null
      htmlContent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends Email$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Email$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly threadId: FieldRef<"Email", 'String'>
    readonly subject: FieldRef<"Email", 'String'>
    readonly from: FieldRef<"Email", 'String'>
    readonly to: FieldRef<"Email", 'String[]'>
    readonly cc: FieldRef<"Email", 'String[]'>
    readonly bcc: FieldRef<"Email", 'String[]'>
    readonly receivedAt: FieldRef<"Email", 'DateTime'>
    readonly headers: FieldRef<"Email", 'Json'>
    readonly textContent: FieldRef<"Email", 'String'>
    readonly htmlContent: FieldRef<"Email", 'String'>
    readonly createdAt: FieldRef<"Email", 'DateTime'>
    readonly updatedAt: FieldRef<"Email", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email.attachments
   */
  export type Email$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    size: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    size: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    emailId: string | null
    filename: string | null
    mimeType: string | null
    size: number | null
    driveFileId: string | null
    driveFileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    emailId: string | null
    filename: string | null
    mimeType: string | null
    size: number | null
    driveFileId: string | null
    driveFileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    emailId: number
    filename: number
    mimeType: number
    size: number
    driveFileId: number
    driveFileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    size?: true
  }

  export type AttachmentSumAggregateInputType = {
    size?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    emailId?: true
    filename?: true
    mimeType?: true
    size?: true
    driveFileId?: true
    driveFileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    emailId?: true
    filename?: true
    mimeType?: true
    size?: true
    driveFileId?: true
    driveFileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    emailId?: true
    filename?: true
    mimeType?: true
    size?: true
    driveFileId?: true
    driveFileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    emailId: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt: Date
    updatedAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailId?: boolean
    filename?: boolean
    mimeType?: boolean
    size?: boolean
    driveFileId?: boolean
    driveFileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean | EmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailId?: boolean
    filename?: boolean
    mimeType?: boolean
    size?: boolean
    driveFileId?: boolean
    driveFileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean | EmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailId?: boolean
    filename?: boolean
    mimeType?: boolean
    size?: boolean
    driveFileId?: boolean
    driveFileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean | EmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    emailId?: boolean
    filename?: boolean
    mimeType?: boolean
    size?: boolean
    driveFileId?: boolean
    driveFileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emailId" | "filename" | "mimeType" | "size" | "driveFileId" | "driveFileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | EmailDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | EmailDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | EmailDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      email: Prisma.$EmailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emailId: string
      filename: string
      mimeType: string
      size: number
      driveFileId: string
      driveFileUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    email<T extends EmailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailDefaultArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly emailId: FieldRef<"Attachment", 'String'>
    readonly filename: FieldRef<"Attachment", 'String'>
    readonly mimeType: FieldRef<"Attachment", 'String'>
    readonly size: FieldRef<"Attachment", 'Int'>
    readonly driveFileId: FieldRef<"Attachment", 'String'>
    readonly driveFileUrl: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
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


  export const EmailScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    subject: 'subject',
    from: 'from',
    to: 'to',
    cc: 'cc',
    bcc: 'bcc',
    receivedAt: 'receivedAt',
    headers: 'headers',
    textContent: 'textContent',
    htmlContent: 'htmlContent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    emailId: 'emailId',
    filename: 'filename',
    mimeType: 'mimeType',
    size: 'size',
    driveFileId: 'driveFileId',
    driveFileUrl: 'driveFileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: StringFilter<"Email"> | string
    threadId?: StringFilter<"Email"> | string
    subject?: StringFilter<"Email"> | string
    from?: StringFilter<"Email"> | string
    to?: StringNullableListFilter<"Email">
    cc?: StringNullableListFilter<"Email">
    bcc?: StringNullableListFilter<"Email">
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    headers?: JsonFilter<"Email">
    textContent?: StringNullableFilter<"Email"> | string | null
    htmlContent?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    attachments?: AttachmentListRelationFilter
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    receivedAt?: SortOrder
    headers?: SortOrder
    textContent?: SortOrderInput | SortOrder
    htmlContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    threadId?: StringFilter<"Email"> | string
    subject?: StringFilter<"Email"> | string
    from?: StringFilter<"Email"> | string
    to?: StringNullableListFilter<"Email">
    cc?: StringNullableListFilter<"Email">
    bcc?: StringNullableListFilter<"Email">
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    headers?: JsonFilter<"Email">
    textContent?: StringNullableFilter<"Email"> | string | null
    htmlContent?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    receivedAt?: SortOrder
    headers?: SortOrder
    textContent?: SortOrderInput | SortOrder
    htmlContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Email"> | string
    threadId?: StringWithAggregatesFilter<"Email"> | string
    subject?: StringWithAggregatesFilter<"Email"> | string
    from?: StringWithAggregatesFilter<"Email"> | string
    to?: StringNullableListFilter<"Email">
    cc?: StringNullableListFilter<"Email">
    bcc?: StringNullableListFilter<"Email">
    receivedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    headers?: JsonWithAggregatesFilter<"Email">
    textContent?: StringNullableWithAggregatesFilter<"Email"> | string | null
    htmlContent?: StringNullableWithAggregatesFilter<"Email"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    emailId?: StringFilter<"Attachment"> | string
    filename?: StringFilter<"Attachment"> | string
    mimeType?: StringFilter<"Attachment"> | string
    size?: IntFilter<"Attachment"> | number
    driveFileId?: StringFilter<"Attachment"> | string
    driveFileUrl?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
    email?: XOR<EmailScalarRelationFilter, EmailWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    emailId?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    driveFileId?: SortOrder
    driveFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: EmailOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driveFileId?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    emailId?: StringFilter<"Attachment"> | string
    filename?: StringFilter<"Attachment"> | string
    mimeType?: StringFilter<"Attachment"> | string
    size?: IntFilter<"Attachment"> | number
    driveFileUrl?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
    email?: XOR<EmailScalarRelationFilter, EmailWhereInput>
  }, "id" | "driveFileId">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    emailId?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    driveFileId?: SortOrder
    driveFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    emailId?: StringWithAggregatesFilter<"Attachment"> | string
    filename?: StringWithAggregatesFilter<"Attachment"> | string
    mimeType?: StringWithAggregatesFilter<"Attachment"> | string
    size?: IntWithAggregatesFilter<"Attachment"> | number
    driveFileId?: StringWithAggregatesFilter<"Attachment"> | string
    driveFileUrl?: StringWithAggregatesFilter<"Attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type EmailCreateInput = {
    id?: string
    threadId: string
    subject: string
    from: string
    to?: EmailCreatetoInput | string[]
    cc?: EmailCreateccInput | string[]
    bcc?: EmailCreatebccInput | string[]
    receivedAt: Date | string
    headers: JsonNullValueInput | InputJsonValue
    textContent?: string | null
    htmlContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    threadId: string
    subject: string
    from: string
    to?: EmailCreatetoInput | string[]
    cc?: EmailCreateccInput | string[]
    bcc?: EmailCreatebccInput | string[]
    receivedAt: Date | string
    headers: JsonNullValueInput | InputJsonValue
    textContent?: string | null
    htmlContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: EmailUpdatetoInput | string[]
    cc?: EmailUpdateccInput | string[]
    bcc?: EmailUpdatebccInput | string[]
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headers?: JsonNullValueInput | InputJsonValue
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: EmailUpdatetoInput | string[]
    cc?: EmailUpdateccInput | string[]
    bcc?: EmailUpdatebccInput | string[]
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headers?: JsonNullValueInput | InputJsonValue
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailCreateManyInput = {
    id?: string
    threadId: string
    subject: string
    from: string
    to?: EmailCreatetoInput | string[]
    cc?: EmailCreateccInput | string[]
    bcc?: EmailCreatebccInput | string[]
    receivedAt: Date | string
    headers: JsonNullValueInput | InputJsonValue
    textContent?: string | null
    htmlContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: EmailUpdatetoInput | string[]
    cc?: EmailUpdateccInput | string[]
    bcc?: EmailUpdatebccInput | string[]
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headers?: JsonNullValueInput | InputJsonValue
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: EmailUpdatetoInput | string[]
    cc?: EmailUpdateccInput | string[]
    bcc?: EmailUpdatebccInput | string[]
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headers?: JsonNullValueInput | InputJsonValue
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    id?: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: EmailCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    emailId: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: EmailUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    emailId: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    receivedAt?: SortOrder
    headers?: SortOrder
    textContent?: SortOrder
    htmlContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    receivedAt?: SortOrder
    textContent?: SortOrder
    htmlContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    subject?: SortOrder
    from?: SortOrder
    receivedAt?: SortOrder
    textContent?: SortOrder
    htmlContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EmailScalarRelationFilter = {
    is?: EmailWhereInput
    isNot?: EmailWhereInput
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    driveFileId?: SortOrder
    driveFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    driveFileId?: SortOrder
    driveFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    emailId?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    driveFileId?: SortOrder
    driveFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    size?: SortOrder
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

  export type EmailCreatetoInput = {
    set: string[]
  }

  export type EmailCreateccInput = {
    set: string[]
  }

  export type EmailCreatebccInput = {
    set: string[]
  }

  export type AttachmentCreateNestedManyWithoutEmailInput = {
    create?: XOR<AttachmentCreateWithoutEmailInput, AttachmentUncheckedCreateWithoutEmailInput> | AttachmentCreateWithoutEmailInput[] | AttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutEmailInput | AttachmentCreateOrConnectWithoutEmailInput[]
    createMany?: AttachmentCreateManyEmailInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<AttachmentCreateWithoutEmailInput, AttachmentUncheckedCreateWithoutEmailInput> | AttachmentCreateWithoutEmailInput[] | AttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutEmailInput | AttachmentCreateOrConnectWithoutEmailInput[]
    createMany?: AttachmentCreateManyEmailInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EmailUpdatetoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdateccInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdatebccInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AttachmentUpdateManyWithoutEmailNestedInput = {
    create?: XOR<AttachmentCreateWithoutEmailInput, AttachmentUncheckedCreateWithoutEmailInput> | AttachmentCreateWithoutEmailInput[] | AttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutEmailInput | AttachmentCreateOrConnectWithoutEmailInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutEmailInput | AttachmentUpsertWithWhereUniqueWithoutEmailInput[]
    createMany?: AttachmentCreateManyEmailInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutEmailInput | AttachmentUpdateWithWhereUniqueWithoutEmailInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutEmailInput | AttachmentUpdateManyWithWhereWithoutEmailInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<AttachmentCreateWithoutEmailInput, AttachmentUncheckedCreateWithoutEmailInput> | AttachmentCreateWithoutEmailInput[] | AttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutEmailInput | AttachmentCreateOrConnectWithoutEmailInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutEmailInput | AttachmentUpsertWithWhereUniqueWithoutEmailInput[]
    createMany?: AttachmentCreateManyEmailInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutEmailInput | AttachmentUpdateWithWhereUniqueWithoutEmailInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutEmailInput | AttachmentUpdateManyWithWhereWithoutEmailInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type EmailCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: EmailCreateOrConnectWithoutAttachmentsInput
    connect?: EmailWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: EmailCreateOrConnectWithoutAttachmentsInput
    upsert?: EmailUpsertWithoutAttachmentsInput
    connect?: EmailWhereUniqueInput
    update?: XOR<XOR<EmailUpdateToOneWithWhereWithoutAttachmentsInput, EmailUpdateWithoutAttachmentsInput>, EmailUncheckedUpdateWithoutAttachmentsInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type AttachmentCreateWithoutEmailInput = {
    id?: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUncheckedCreateWithoutEmailInput = {
    id?: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutEmailInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutEmailInput, AttachmentUncheckedCreateWithoutEmailInput>
  }

  export type AttachmentCreateManyEmailInputEnvelope = {
    data: AttachmentCreateManyEmailInput | AttachmentCreateManyEmailInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentUpsertWithWhereUniqueWithoutEmailInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutEmailInput, AttachmentUncheckedUpdateWithoutEmailInput>
    create: XOR<AttachmentCreateWithoutEmailInput, AttachmentUncheckedCreateWithoutEmailInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutEmailInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutEmailInput, AttachmentUncheckedUpdateWithoutEmailInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutEmailInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutEmailInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    emailId?: StringFilter<"Attachment"> | string
    filename?: StringFilter<"Attachment"> | string
    mimeType?: StringFilter<"Attachment"> | string
    size?: IntFilter<"Attachment"> | number
    driveFileId?: StringFilter<"Attachment"> | string
    driveFileUrl?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type EmailCreateWithoutAttachmentsInput = {
    id?: string
    threadId: string
    subject: string
    from: string
    to?: EmailCreatetoInput | string[]
    cc?: EmailCreateccInput | string[]
    bcc?: EmailCreatebccInput | string[]
    receivedAt: Date | string
    headers: JsonNullValueInput | InputJsonValue
    textContent?: string | null
    htmlContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    threadId: string
    subject: string
    from: string
    to?: EmailCreatetoInput | string[]
    cc?: EmailCreateccInput | string[]
    bcc?: EmailCreatebccInput | string[]
    receivedAt: Date | string
    headers: JsonNullValueInput | InputJsonValue
    textContent?: string | null
    htmlContent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutAttachmentsInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
  }

  export type EmailUpsertWithoutAttachmentsInput = {
    update: XOR<EmailUpdateWithoutAttachmentsInput, EmailUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
    where?: EmailWhereInput
  }

  export type EmailUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: EmailWhereInput
    data: XOR<EmailUpdateWithoutAttachmentsInput, EmailUncheckedUpdateWithoutAttachmentsInput>
  }

  export type EmailUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: EmailUpdatetoInput | string[]
    cc?: EmailUpdateccInput | string[]
    bcc?: EmailUpdatebccInput | string[]
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headers?: JsonNullValueInput | InputJsonValue
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: EmailUpdatetoInput | string[]
    cc?: EmailUpdateccInput | string[]
    bcc?: EmailUpdatebccInput | string[]
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headers?: JsonNullValueInput | InputJsonValue
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyEmailInput = {
    id?: string
    filename: string
    mimeType: string
    size: number
    driveFileId: string
    driveFileUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    driveFileId?: StringFieldUpdateOperationsInput | string
    driveFileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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