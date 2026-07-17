// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "Akriti"
tinderUser.isLoggedIn = false



// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Akriti",
            lastname: "Sharma"
        }

    }
}

// console.log(regularUser.fullname);

// console.log()
// console.log(regularUser.fullname.userFullName);


const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const users = [
    {
        id:1,
        email:"someone@gmail.com"
    },
    {
        id:1,
        email:"someone@gmail.com"
    },
    {
        id:1,
        email:"someone@gmail.com"
    },
    {
        id:1,
        email:"someone@gmail.com"
    },
    
]

// console.log(users[1].email)

// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    courseName:"js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor)


// const {courseInstructor} = course

// console.log(courseInstructor);


const{ courseInstructor:instructor} = course
console.log(instructor)



// {
//     "name" : "Akriti",
//     "CourseName": "js in hindi",
//     "ptice" : "free"
// }
