
var emailsOfApplicants = ['finalsilence@gmail.com',  ["javascriptjhvdfh"]];
var nddimensionalemails = 1;
function create(email){
    //var emailsOfApplicants = ['finalsilence@gmail.com', ["javascriptrighihjh"]];
    if( emailsOfApplicants.includes(email)){
        return 0
    }
    else{

    emailsOfApplicants.push(email);
    emailsOfApplicants.push("Kiwi");
    console.log(emailsOfApplicants);
        //if emailsOfApplicants.includes(email)
        return emailsOfApplicants;
    }};
create("clamwinds@gmail.com");
create("finalsilence@gmail.com");
//console.log("         "+create);


var items = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for(i=0; i<  items.length; i++){
    console.log(i)}
