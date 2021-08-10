// module.exports = srv => {


// //Action code

//  srv.on("moveUserToAnotherProject", async (req) => {

//         const { userId, projectId } = req.data;

//         const db = srv.transaction(req);

//         let { Users } = srv.entities;        

//         await db.update(Users).set({ project_id:  projectId }).where({ id: userId });

//          //console.log("User info after update ", JSON.stringify(results));

//         return {
//             code: 200,
//             success: true,
//             moveStatus: "Successfully moved to new project",
//             userId,
//            projectId
           
//         };

       
//     });



// //Functions Code
//     srv.on("getDATE", () => {
//         //today = new Date (); 
//       return new Date ();
//    });

//    srv.on("getProjectMembers", async (req) => {
//       const { id } = req.data;
//       const db = srv.transaction(req);

//       let { Users } = srv.entities;
//       const results = await db.read(Users).where({ PROJECT_ID: id });

//       return results.map((user) => user.name);
//    }); 

// }
