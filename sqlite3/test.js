const HandleDB = require('./sqlite3')

// used:
let db = new HandleDB();

async function run() {

    const ret = await db.connectDataBase()
    console.log(ret)

    // let sentence = `
    // create table if not exists baby (
    //      begin_time varchar(255),
    //      create_time varchar(255),
    //      end_time varchar(255),
    //      play_id varchar(255),
    //      postion_id int(50),
    //      status int(50),
    //      task_id int(50),
    //      same_day int(50)
    //  );`;
    // const ret2 = await db.createTable(sentence);
    // console.log(ret2)
    // console.log()
    
    // const ret4 = await db.executeSql(`select * from baby where same_day = ?`, '2017-7-12', 'get')
    // console.log(ret4)
    // console.log()
    
    // const ret3 = await db.executeSql(`insert into baby (begin_time, create_time, end_time, play_id, postion_id, status, task_id, same_day) values(?, ?, ?, ?, ?, ?, ?, ?)`,
    // ['2017/7/12', '2017/7/12', '2017/7/12', 102, 3, 0, 11, '2017-7-12'])
    // console.log(ret3)
    // console.log()
    
    
    // const ret6 = await db.executeSql(`update baby set same_day = ? where task_id = ?`, ['2018-08-13', 11])
    // console.log(ret6)
    // console.log()
    
    // const ret7 = await db.executeSql(`select * from baby where rowid = ?`, 1, 'get')
    // console.log(ret7)
    // console.log()
    
    // const ret5 = await db.executeSql(`delete from baby where task_id = ?`, 11)
    // console.log(ret5)
    // console.log()

    // // 一次性插入多个数据
    // const arr =  [
    //     {
    //         "begin_time": "1970-01-01 00:00:00",
    //         "create_time": "2017-07-11",
    //         "end_time": "",
    //         "play_id": 17,
    //         "postion_id": 1,
    //         "status": 0,
    //         "task_id": 24
    //     },
    //     {
    //         "begin_time": "1970-01-01 00:00:00",
    //         "create_time": "2017-07-11",
    //         "end_time": "",
    //         "play_id": 18,
    //         "postion_id": 4,
    //         "status": 0,
    //         "task_id": 24
    //     },
    //     {
    //         "begin_time": "1970-01-01 00:00:00",
    //         "create_time": "2017-07-11",
    //         "end_time": "",
    //         "play_id": 19,
    //         "postion_id": 2,
    //         "status": 0,
    //         "task_id": 24
    //     },
    //     {
    //         "begin_time": "1970-01-01 00:00:00",
    //         "create_time": "2017-07-11",
    //         "end_time": "",
    //         "play_id": 20,
    //         "postion_id": 3,
    //         "status": 0,
    //         "task_id": 24
    //     }
    // ]
    // const promises = arr.map(function(obj) {
    //     return db.executeSql(`insert into baby (begin_time, create_time, end_time, play_id, postion_id, status, task_id, same_day) values(?, ?, ?, ?, ?, ?, ?, ?)`,
    //         [obj.begin_time, obj.create_time, obj.end_time, obj.play_id, obj.postion_id, obj.status, obj.task_id, '2017-7-12']);
    // });
    // const ret10 = await Promise.all(promises)
    // console.log(ret10)

    const ret8 = await db.executeSql(`select * from baby`, undefined ,'all')
    console.log(ret8)

    // const ret9 =  await db.executeSql('delete from ads')
    // console.log(ret9)

    const ret11 = await db.executeSql('select max(task_id) from baby', undefined, 'run')
    console.log('ret11', ret11)
}


run()
