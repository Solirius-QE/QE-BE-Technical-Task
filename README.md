# QE-BE-Technical-Task

## 📝 The Assignment

Your assignment is to develop a working automated test suite for an API backend using tools and programming language of your choice.

We are not seeking to pose any misleading questions; our primary goal is to witness your solution in action, assess the structure of your code, and gain insights into your strategic decision-making process.

Feel free to showcase your skills in crafting a functional, maintainable, and efficient automated test suite for API backend testing.

We have created a simple Rest API built with Node.js. It provides endpoints for managing products and variants, as well as a search functionality.

## 🕗 Time Allocation

Although there's no strict time limit for completing this task before the specified deadline given, we advise against spending more than a few hours on it. We don't expect an extensive number of tests, but a well-rounded selection is appreciated. If you have the time and inclination, feel free to include any additional thoughts on your solution and on any further considerations you would take in to account for testing an application like the one we have used for this task.

## 📨 Presenting/Submitting Your Solution

Please download and email your solution from a private Github repository you have created and send the Zip back to us. Any issues please do get in touch with the recruiter you have been speaking with.

## Getting Started with the API

### Prerequisites

- Node.js and npm installed
- MongoDB set up and running [(setup instructions)](#mongodb)
- `npm install`
- `npm install nodemon --save-dev`

#### 1. **Clone the repository :**

   ```bash
   git clone https://github.com/Solirius-QE/QE-BE-Technical-Task.git
   ```
#### 2. <a id="mongodb"></a>**Create a MongoDB :**

You have two options, you can create a MongoDB locally or we also recommend creating a free cluster in MongoDB Atlas cloud as much of the heavy work creating a MongoDB is done for you (it is free, please do not pay for anything to complete this task).

https://www.mongodb.com/cloud/atlas/register

Video on how to set up a free db/cluster with MongoDB Atlas Cloud (you only need to watch the first 2.50 mins). https://youtu.be/jXgJyuBeb_o?si=-0hXD9m_fOabJ6g0


#### 3. **Create a .env file in the root directory with the following content :**

   ```
   MONGO_URI=<Your MongoDB connection string>
   PORT=3000
   ```

#### 4. Start server :
   `npm run start`

You should now be up and running.


