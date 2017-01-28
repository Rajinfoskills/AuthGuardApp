# AuthGuardApp
Simple login app using <b>Firebase</b> and <b>Angular 2</b>

User can login with facebook, Google or with Custom Email.
User who don't have an account, they can signup.

An <b>AuthGuardApp</b> Angular 2 application allows user interaction with login which uses AngularFire Realtime cloud-hosted database, it supports nosql mechanism where the data can be stored as JSON and can be accessed anywhere from the world. 

# AngularFire
AngularFire is the officially supported AngularJS binding for Firebase. Firebase is a backend service that provides data storage, authentication, and static website hosting for your Angular app. AngularFire is a complement to the core Firebase client.

The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.

# Prerequisites
 - Developer must have an account with Firebase (firebase.com)
 - First, head over to Firebase and create a new project. Give it a name and then click Add Firebase to your web app. The following        screen will appear with your Firebase project settings:
 
   ![firebase palette](http://s3.amazonaws.com/coursetro/posts/content_images/1-1484580318329.jpg)
   
 - Copy just the lines that are blurred out above and save it in a text file somewhere on your desktop; we'll need these details            shortly. Then click on the Authentication link on the left sidebar and choose SIGN-IN METHOD on the top tab:
 
   ![firebase palette](https://s3.amazonaws.com/coursetro/posts/content_images/2-1484580326068.jpg)
   
 - Once there, enable at least Email/Password, Google, and Facebook. Enabling Email/Password and Google are easy, but Facebook requires    providing it with an App ID and an App Secret. In order to access those, you'll need to head on over to Facebook Developers. If you      don't already have a page, you'll need to create one. Then once created, you can access the App ID and App Secret, from which you        need to paste into the Facebook settings on Firebase as shown below:
 
   ![firebase palette](https://s3.amazonaws.com/coursetro/posts/content_images/3-1484580332137.jpg)
   
 - Also, notice the red arrow? You need to click that icon to copy the OAuth Redirect URI. Then head back to faceboook developers, click    "Facebook Login" (if it's not there, you have to click Add Product to add it (just go through the steps quickly, nothing too            important there)) and paste in the OAuth redirect URI as shown below:
   
   ![firebase palette](https://s3.amazonaws.com/coursetro/posts/content_images/4-1484580337982.jpg)
 
 - Next, click on Database on the left sidebar at Firebase, and then the Rules tab at the top.  Change them to:
    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }
    And hit Publish. Your screen should look similar to this: 
    
    ![firebase palette](https://s3.amazonaws.com/coursetro/posts/content_images/5-1484580344208.jpg)
    
    Awesome. Now we're ready to rock.
 
# How it Works?
 - Better side, install Angular-cli globally - <b>npm install -g angular-cli</b>
 - Open application directory and invoke the below commands 
 - Install npm packages using  - <b>npm install</b>
 - Start the application using - <b>npm serve</b>
 - Then, the application can be loaded using live-server at <b>http://localhost:4200</b>
 - User can login into the app using facebook, google account logins or by custom emails.
 - Else the user doesn't want to login by those, he can signup with any email, which needs to be verified to access the application.
 
 
 <b>References:</b><br/>
 https://coursera.com<br/>
 https://coursetro.com<br/>
 https://console.firebase.google.com<br/>
 https://developers.facebook.com
