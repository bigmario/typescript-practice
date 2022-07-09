import _ from 'lodash';

const data = [
  {
    username: 'mario',
    role: 'admin'
  },
  {
    username: 'andres',
    role: 'seller'
  },
  {
    username: 'angelica',
    role: 'seller'
  },
  {
    username: 'pepe',
    role: 'customer'
  },
]
const rta = _.groupBy(data, (item)=>item.role);

console.log(rta);
