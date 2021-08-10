using {demo} from '../db/schema';

service ProjectService
{
entity Users as select from demo.Users;
entity Projections as select from demo.Projects;

//function getDATE() returns Date;

// function getProjectMembers(id: String) returns array of String;

// type moveResult {
//         code: Integer;
//         success     : Boolean;
//         moveStatus  : String;
//         userId      : Integer;
//         projectId   : Integer;
//         };

// action moveUserToAnotherProject(userId : Integer, projectId: Integer) 
// returns moveResult;


}
