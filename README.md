Creed&Bear1.0 contains the following features:

******************************************************************************

1. Fake API created:
    1.1. List of users with pagination, responds with first page as default page

    1.2. Obtain a user based on id provider.

    1.3. Create / modify / delete.
    Returns response of a successfully created, modified and deleted user. 

    1.4. Verification:
    Returns the response of a successful login.


******************************************************************************
HOW TO RUN ON PERSONAL SYSTEM:

1. clone the repo to your local system,
2. Run "node install" to download the required dependencies like faker
3. The code for pseudo api is stored in "./src/api/user_api.js".
4. Mock routes created to test apis in ".src/api/routes/users.js", to run the 
file run "node src/api/routes/users.js". The responses are logged in console as json objects for the purpose of viewing.


******************************************************************************

SAMPLE RESPONSE FROM STEP 4.

    Promise { <pending> }
    Promise { <pending> }
    Promise { <pending> }
    Promise { <pending> }
    Promise { <pending> }
    Promise { <pending> }
    
    PAGINATION TO GET ALL USERS:
    {
    page: 1,
    per_page: 10,
    total: 49,
    total_pages: 5,
    data: [
        {
        id: 1,
        firstName: 'Hortense',
        lastName: 'Hayes',
        email: 'Hortense89@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/715.jpg'
        },
        {
        id: 2,
        firstName: 'Morris',
        lastName: 'Casper',
        email: 'Morris_Casper42@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg'
        },
        {
        id: 3,
        firstName: 'Peyton',
        lastName: 'Koepp',
        email: 'Peyton.Koepp@gmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg'
        },
        {
        id: 4,
        firstName: 'Breanna',
        lastName: 'Stracke',
        email: 'Breanna_Stracke@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg'
        },
        {
        id: 5,
        firstName: 'Newton',
        lastName: 'Williamson',
        email: 'Newton.Williamson@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/285.jpg'
        },
        {
        id: 6,
        firstName: 'Alfonzo',
        lastName: 'Cassin',
        email: 'Alfonzo_Cassin@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/606.jpg'
        },
        {
        id: 7,
        firstName: 'Lesley',
        lastName: 'Corwin',
        email: 'Lesley.Corwin@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg'
        },
        {
        id: 8,
        firstName: 'Jett',
        lastName: 'Jones',
        email: 'Jett50@gmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/291.jpg'
        },
        {
        id: 9,
        firstName: 'Hershel',
        lastName: 'Davis',
        email: 'Hershel.Davis@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg'
        },
        {
        id: 10,
        firstName: 'Yasmeen',
        lastName: "O'Conner",
        email: 'Yasmeen.OConner@yahoo.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/990.jpg'
        }
    ]
    }

    GETTING SPECIFIC USER
    {
    data: {
        id: 2,
        firstName: 'Morris',
        lastName: 'Casper',
        email: 'Morris_Casper42@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg'
    }
    }

    CREATE,UPDATE AND DELETE RESPONSE
    { data: { status: 'success' } }
    { data: { status: 'success' } }
    { data: { status: 'success' } }

    LOGIN OF USER
    {
    data: {
        status: 'success',
        user: {
        id: 2,
        firstName: 'Morris',
        lastName: 'Casper',
        email: 'Morris_Casper42@hotmail.com',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg'
        }
    }
    }
