import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  node?: Maybe<Node>;
  tasks?: Maybe<TaskConnection>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryTasksArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addTasks?: Maybe<TaskPayload>;
  noop?: Maybe<NoopPayload>;
  removeTasks?: Maybe<TaskPayload>;
  updateTasks?: Maybe<TaskPayload>;
};


export type MutationAddTasksArgs = {
  input: AddTasksInput;
};


export type MutationNoopArgs = {
  input?: Maybe<NoopInput>;
};


export type MutationRemoveTasksArgs = {
  input: RemoveTasksInput;
};


export type MutationUpdateTasksArgs = {
  input: UpdateTasksInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type NoopInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type NoopPayload = {
   __typename?: 'NoopPayload';
  clientMutationId?: Maybe<Scalars['String']>;
};

export enum TaskStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED'
}

export type Task = Node & {
   __typename?: 'Task';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: TaskStatus;
  order: Scalars['Int'];
};

export type TaskConnection = {
   __typename?: 'TaskConnection';
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  endCursor?: Maybe<Scalars['String']>;
};

export type TaskEdge = {
   __typename?: 'TaskEdge';
  cursor: Scalars['String'];
  node?: Maybe<Task>;
};

export type TaskInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  status: TaskStatus;
  order: Scalars['Int'];
};

export type AddTasksInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<TaskInput>>>;
};

export type UpdateTasksInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<TaskInput>>>;
};

export type RemoveTasksInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TaskPayload = {
   __typename?: 'TaskPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  Node: ResolversTypes['Task'],
  NoopInput: NoopInput,
  NoopPayload: ResolverTypeWrapper<NoopPayload>,
  TaskStatus: TaskStatus,
  Task: ResolverTypeWrapper<Task>,
  TaskConnection: ResolverTypeWrapper<TaskConnection>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  TaskEdge: ResolverTypeWrapper<TaskEdge>,
  TaskInput: TaskInput,
  AddTasksInput: AddTasksInput,
  UpdateTasksInput: UpdateTasksInput,
  RemoveTasksInput: RemoveTasksInput,
  TaskPayload: ResolverTypeWrapper<TaskPayload>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  Mutation: {},
  Node: ResolversParentTypes['Task'],
  NoopInput: NoopInput,
  NoopPayload: NoopPayload,
  TaskStatus: TaskStatus,
  Task: Task,
  TaskConnection: TaskConnection,
  PageInfo: PageInfo,
  TaskEdge: TaskEdge,
  TaskInput: TaskInput,
  AddTasksInput: AddTasksInput,
  UpdateTasksInput: UpdateTasksInput,
  RemoveTasksInput: RemoveTasksInput,
  TaskPayload: TaskPayload,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
  tasks?: Resolver<Maybe<ResolversTypes['TaskConnection']>, ParentType, ContextType, RequireFields<QueryTasksArgs, never>>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addTasks?: Resolver<Maybe<ResolversTypes['TaskPayload']>, ParentType, ContextType, RequireFields<MutationAddTasksArgs, 'input'>>,
  noop?: Resolver<Maybe<ResolversTypes['NoopPayload']>, ParentType, ContextType, RequireFields<MutationNoopArgs, never>>,
  removeTasks?: Resolver<Maybe<ResolversTypes['TaskPayload']>, ParentType, ContextType, RequireFields<MutationRemoveTasksArgs, 'input'>>,
  updateTasks?: Resolver<Maybe<ResolversTypes['TaskPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTasksArgs, 'input'>>,
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Task', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type NoopPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoopPayload'] = ResolversParentTypes['NoopPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>,
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type TaskConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskConnection'] = ResolversParentTypes['TaskConnection']> = ResolversObject<{
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>,
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskEdge']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type TaskEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskEdge'] = ResolversParentTypes['TaskEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type TaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskPayload'] = ResolversParentTypes['TaskPayload']> = ResolversObject<{
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  NoopPayload?: NoopPayloadResolvers<ContextType>,
  Task?: TaskResolvers<ContextType>,
  TaskConnection?: TaskConnectionResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  TaskEdge?: TaskEdgeResolvers<ContextType>,
  TaskPayload?: TaskPayloadResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
