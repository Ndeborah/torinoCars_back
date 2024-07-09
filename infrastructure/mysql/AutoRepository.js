// class AutoRepository {
//     constructor(mysqlClient) {
//         this.mysqlClient = mysqlClient;
//     }
//     modificarAuto(auto){
//         const sql = "UPDATE cars SET patente = ?,marca = ?, modelo= ?, color = ?, id_user = ? WHERE patente=?";
//         return this.mysqlClient.query(
//             sql,
//             [
//                 auto.patente,
//                 auto.marca,
//                 auto.modelo,
//                 auto.color,
//                 auto.id_user,
//             ]
//         )
//     }