import UserService from './service';

export default {
  Query: {
    users: (_: any, params: any, ctx: any) => UserService.findAll(),
    user: (_: any, { id }: any, ctx: any) => UserService.findById(id),
  },
  Mutation: {
    saveUser: (_: any, { input }: any, ctx: any) => UserService.saveUser(input),
    changeUser: (_: any, { id, input }: any, ctx: any) =>
      UserService.changeUser(id, input),
    removeUser: (_: any, { id }: any, ctx: any) => UserService.removeUser(id),
  },
};
