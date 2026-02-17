### # 1) What is the difference between null and undefined?
-> undefined হলো যখন আমরা কোন ভ্যারিয়েবল ডিক্লার করি কিন্তু সেটার ভ্যালু দেই না খলি রাখা হয়, তখন সেটা undefined দেয়।

null হলো যখন আমরা কোন ভ্যারিয়েবল এর ভ্যালু ইচ্ছে করেই null সেট করে দেই

পার্থক্য হল undefined মানে ভ্যালু দেওয়া হয়নি, null মানে ইচ্ছাকৃতভাবে খালি রাখা হয়েছে

##
### # 2) What is the use of the map() function in JavaScript? How is it different from forEach()?

map() -> যখন আমরা কোন array এর উপর map() চালাই তখন একটি নতুন array তরী করে এবং আমরা শেই নতুন array এর উপর আরও কোন লজিক এপ্লাই করেতে পারি এবং এপ্লাইলড নতুন array রিটন করে

forEach() -> আমরা কোন array এর উপর forEach() চালাই তখন শুধু আমরা শেই array এর প্রতিটী ভ্যালু উপর আরও কোন লজিক এপ্লাই করেতে পারি এবং শেই ভ্যালু গুলো দেই কিন্তু কোন array রিটন করে না

পার্থক্য হল map() নতুন array রিটন করে আর forEach() কোন array রিটন করে না


##
###  3) What is the difference between == and ===?

== -> দুটা ভ্যালু চেক করার সময় শুধু ভ্যালু এর মান চেক করে , মান একই হলে true দেই বাট ডেটা টাইপ চেক করে না 

=== -> দুটা ভ্যালু চেক করার সময় ভ্যালু এর মান চেক করে সাথে শেই ভ্যালু টার ডেটা টাইপ ও চেক করে সব সেইম হলে true দেই না হলে false দেই

পার্থক্য হল == ডেটা টাইপ চেক করে না আর === ভ্যালু এর সাথে ডেটা টাইপ চেক করে


##
###  4) What is the significance of async/await in fetching API data?
API থেকে data আনতে আমরা async/await ব্যাবহার করি। async/await এর মাধ্যমে এসিক্রোনাস কডকে সিনক্রনাস কডের মত কাজ করানো যায়। try catch এর মাধ্যমে সহজে error ধরতে পারি।


##
###  5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Global -> পুর কোড এর যেকোন য্যগা থেকে আমরা এক্সেস করতে পারি
Function -> Function এর ভিতরে যে গুলো ডিক্লার করা হয় শুধু সেই Function ভিটরে এ সুধু এক্সেস করতে পারি
Block -> {} ব্রাকেটের এর ভিতরে যে গুলো ডিক্লার করা সেগুলো শুধু {} ব্রাকেটের এর ভিতরে এক্সেস করতে পারি