See a live demo <a href="http://spence.xyz/">here</a>.

******

This theme is inspired by <a href="https://www.shortoftheweek.com/">Short of the Week</a> and <a href="https://levels.io/">Levels.io</a>.

###Social Media Icons###

Go to code injection, then paste this snippet in the blog footer. Change my social media profiles out with yours. If you do not want social media icons then do not insert this snippet and they will not appear.

In order to get around the word limit of the blog description field I have put in a JavaScript injection for it. Simply paste your desired description below. It supports HTML as well.

      <script>
        var instagram = "https://www.instagram.com/spencexyz/";
        var facebook = "https://www.facebook.com/spencexyz";
        var twitter = "https://twitter.com/spencemcc";
        var github;
        var blog_description = "I’ll always be a full-time student. I read, write, and have been known to program from time to time. When I’m not working on my side-projects, I’m helping someone with theirs. Follow me on Twitter to keep up with my work.";
        
        if(blog_description) {
            document.getElementById('blog_description').innerHTML = blog_description;
        }
        
        if(twitter) {
            var twitterIcon = document.getElementById('twitter');
        twitterIcon.setAttribute('href', twitter);
            twitterIcon.style.display = "inline-block";
        }
        
        if(facebook) {
            var twitterIcon = document.getElementById('facebook');
        twitterIcon.setAttribute('href', twitter);
            twitterIcon.style.display = "inline-block";
        }
        
        if(instagram) {
            var twitterIcon = document.getElementById('instagram');
        twitterIcon.setAttribute('href', twitter);
            twitterIcon.style.display = "inline-block";
        }
        
        if(github) {
            var twitterIcon = document.getElementById('github');
        twitterIcon.setAttribute('href', twitter);
            twitterIcon.style.display = "inline-block";
        }     
      </script>

###Profile Picture###

Your blog logo will be the image that appears at the top of your blog. This variable is being treated as a profile image. This image should be cropped into a square before uploading it.

###Archive Page###
<b>Step 1:</b><br>
Create a new post and title it Archive, or something else if you don't like archive.
<b>Step 2:</b><br>
Make the URL of the page "posts-archive". This is not negotiable.
<b>Step 3:</b><br>
Make sure that the page is set to be a static page, not a post.




