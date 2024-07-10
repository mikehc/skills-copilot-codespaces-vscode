function skillsMember() {
    var member = {
        name: 'John Doe',
        skills: ['JS', 'Java', 'Python'],
        age: 25
    };

    // using forEach
    member.skills.forEach((skill) => {
        console.log(skill);
    });
}