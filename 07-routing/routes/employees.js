
/*
 * GET employees page.
 */

var employees = [
          {"id":0, "first_name":"Phineas", "last_name":"Flynn", "company":"Flynn Engineering", "email":"phineas@flynnengineering.rs", "active":"true", "occupation":"engineer"},
          {"id":1,"first_name":"Ferb", "last_name":"Flynn", "company":"Flynn Engineering", "email":"ferb@flynnengineering.rs", "active":"true", "occupation":"engineer"},
          {"id":2,"first_name":"Isabella", "last_name":"Garcia-Shapiro", "company":"Fireside Pharmaceuticals", "email":"isabella@fireside.com", "active":"true"},
          {"id":3,"first_name":"Perry", "last_name":"Flynn", "company":"Monogram", "email":"t@monogram.com", "active":"true", "occupation":"agent"},
          {"id":4,"first_name":"Pinky", "last_name":"Garcia-Shapiro", "company":"Other Monogram", "email":"pinky@onthermonogram.rs", "active":"true", "occupation":"agent"},
          {"id":5,"first_name":"Heinz", "last_name":"Doofenschmirtz", "company":"Doofenschmirtz Evil Inc.", "email":"heinz@dei.tv", "active":"true", "occupation":"evil genius?"}
      ];

exports.employees = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(employees));
};

exports.addEmployee = function(req, res){
  // so secure
  employees.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(employees));
}