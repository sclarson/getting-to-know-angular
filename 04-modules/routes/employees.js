
/*
 * GET employees page.
 */

var employees = [
          {"first_name":"Phineas", "last_name":"Flynn", "company":"Flynn Engineering", "email":"phineas@flynnengineering.rs", "active":"true", "occupation":"engineer"},
          {"first_name":"Ferb", "last_name":"Flynn", "company":"Flynn Engineering", "email":"ferb@flynnengineering.rs", "active":"true", "occupation":"engineer"},
          {"first_name":"Isabella", "last_name":"Garcia-Shapiro", "company":"Fireside Pharmaceuticals", "email":"isabella@fireside.com", "active":"true"},
          {"first_name":"Perry", "last_name":"Flynn", "company":"Monogram", "email":"t@monogram.com", "active":"true", "occupation":"agent"},
          {"first_name":"Pinky", "last_name":"Garcia-Shapiro", "company":"Other Monogram", "email":"pinky@onthermonogram.rs", "active":"true", "occupation":"agent"},
          {"first_name":"Heinz", "last_name":"Doofenschmirtz", "company":"Doofenschmirtz Evil Inc.", "email":"heinz@dei.tv", "active":"true", "occupation":"evil genius?"}
      ];
exports.employees = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(employees));
};