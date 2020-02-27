import { v4 as uuidv4 } from 'uuid';
import { User } from './model';

function findAll() {
  return User.findAll().then((users: any) => ({
    edges: users,
    last: true,
    page: 0,
  }));
}

function findById(id: string) {
  return User.findOne({
    where: { id },
  }).then((res: any) => {
    console.log(res);
    return res;
  });
}

function saveUser(data: any) {
  const id = uuidv4();

  return User.create({ ...data, id });
}

function changeUser(id: string, data: any) {
  return User.update(data, {
    where: { id },
  }).then((res: any, list: any) => {
    console.log(res, list);
    return res;
  });
}

function removeUser(id: string) {
  return User.destroy({
    where: { id },
  }).then((res: any) => ({ number: res }));
}

export default {
  findAll,
  findById,
  saveUser,
  changeUser,
  removeUser,
};
