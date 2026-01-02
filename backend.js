
//Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
    import{getDatabase, ref,set,child,remove,update,get,push} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
            // TODO: Add SDKs for Firebase products that you want to use
export async function checkaccount(data){
    const firebaseConfig = {
                apiKey: "AIzaSyAevQ-rRmgvgh4Uz3oaEnkkqMuRV-i1M14",
                authDomain: "business-a33a0.firebaseapp.com",
                databaseURL: "https://business-a33a0-default-rtdb.firebaseio.com",
                projectId: "business-a33a0",
                storageBucket: "business-a33a0.firebasestorage.app",
                messagingSenderId: "408074741884",
                appId: "1:408074741884:web:ae1757e5bbe8eeb26941f9"
            };
//set the business items in register and login page and store the business name
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase()
            var bucket = await get(ref(db,"scoregate/" + data.googleId))

            if(bucket.exists()){
                return bucket.val()
            }
             await set(ref(db,"scoregate/" + data.googleId),data);
            try {
               
            var infor = await get(ref(db,"scoregate/" + data.googleId))
            var val = infor.val();

                 return val
                
                
            } catch (error) {
                alert(error)
            }
            
    
}

export async function updateData(newSheet,googleId){
     const firebaseConfig = {
                apiKey: "AIzaSyAevQ-rRmgvgh4Uz3oaEnkkqMuRV-i1M14",
                authDomain: "business-a33a0.firebaseapp.com",
                databaseURL: "https://business-a33a0-default-rtdb.firebaseio.com",
                projectId: "business-a33a0",
                storageBucket: "business-a33a0.firebasestorage.app",
                messagingSenderId: "408074741884",
                appId: "1:408074741884:web:ae1757e5bbe8eeb26941f9"
            };
//set the business items in register and login page and store the business name
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase()
    update(ref(db,"scoregate/" + googleId),{
        casheet:newSheet
    })

     var bucket = await get(ref(db,"scoregate/" + googleId))

            if(bucket.exists()){
                var data = bucket.val()
                localStorage.setItem("data", JSON.stringify(data));
                window.location.reload()
            }
            return "successful"
}


export async function updateDataPlan(newSheet,googleId,plan){
     const firebaseConfig = {
                apiKey: "AIzaSyAevQ-rRmgvgh4Uz3oaEnkkqMuRV-i1M14",
                authDomain: "business-a33a0.firebaseapp.com",
                databaseURL: "https://business-a33a0-default-rtdb.firebaseio.com",
                projectId: "business-a33a0",
                storageBucket: "business-a33a0.firebasestorage.app",
                messagingSenderId: "408074741884",
                appId: "1:408074741884:web:ae1757e5bbe8eeb26941f9"
            };
//set the business items in register and login page and store the business name
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase()
    update(ref(db,"scoregate/" + googleId),{
        casheet:newSheet,
        plan : plan
    })

     var bucket = await get(ref(db,"scoregate/" + googleId))

            if(bucket.exists()){
                var data = bucket.val()
                localStorage.setItem("data", JSON.stringify(data));
                window.location.reload()
            }
}
export async function updateDataPurchsedPlan(plan,units,bucket){
     const firebaseConfig = {
                apiKey: "AIzaSyAevQ-rRmgvgh4Uz3oaEnkkqMuRV-i1M14",
                authDomain: "business-a33a0.firebaseapp.com",
                databaseURL: "https://business-a33a0-default-rtdb.firebaseio.com",
                projectId: "business-a33a0",
                storageBucket: "business-a33a0.firebasestorage.app",
                messagingSenderId: "408074741884",
                appId: "1:408074741884:web:ae1757e5bbe8eeb26941f9"
            };
//set the business items in register and login page and store the business name
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase()
    update(ref(db,"scoregate/" + bucket),{
        casheet:units,
        plan : plan
    })

     var bucket = await get(ref(db,"scoregate/" + bucket))

            if(bucket.exists()){
                var data = bucket.val()
                localStorage.setItem("data", JSON.stringify(data));
                window.location.href = "./space.html"
            }
}





