import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} from "graphql";
import express from 'express';
import graphqlHTTP from 'express-graphql';

//创建一个HelloWorldType类型
const HelloWorldType = new GraphQLObjectType({
    name: 'HelloWorldType',
    fields: () => ({
        //包含一个hello字段 返回类型是string
        hello: {
            type: GraphQLString,
            //返回内容为world
            resolve() {
                return 'world'
            }
        }
    })
});

//创建查询的schema
const schema = new GraphQLSchema({
    query: HelloWorldType
});

//graphql自带express中间件 启动express
//访问http://localhost:3000/graphql?query={hello} 查询
const app = express();

app
    .use('/graphql', graphqlHTTP({
    schema,
    pretty: true
})).listen(3000, () => {
    console.log('GraphQL server running on http://localhost:3000/graphql')
});