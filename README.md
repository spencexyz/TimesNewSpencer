Go to code injection, then paste this snippet in the blog footer. Change my social media profiles out with yours. If you do not want social media icons then do not insert this snippet and they will not appear.

In order to get around the word limit of the blog description field I have put in a JavaScript injection for it. Simply paste your desired description below. It supports HTML as well.

      <script>
        var instagram = "https://www.instagram.com/spencexyz/";
        var facebook = "https://www.facebook.com/spencexyz";
        var twitter = "https://twitter.com/spencemcc";
        var github;
        var blog_description = "I make Nomad List, Remote | OK, Startup Retreats and Go Fucking Do It. I travel to work from anywhere, bootstrap companies and only own what fits in my backpack. Before, I founded a music network on YouTube w/ 100+ mln views. Follow my adventures on Twitter or see a list of my posts. You can pre-order my book MAKE now.";
        
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

Your blog logo will be the image that appears at the top of your blog. This variable is being treated as a profile image. This image should be cropped into a square before uploading it.
