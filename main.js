/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="data:application/octet-stream;base64,LyoKPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoqKiBXZWVrIDIgLSBQcm9qZWN0IDEgKioKCkJlbG93IGFyZSBhIG51bWJlciBvZiBwcm9ibGVtcyBmb3IgeW91IHRvIHNvbHZlCnVzaW5nIEpTLiBUaGUgSlMgY29kZSBjYW4gYmUgd3JpdHRlbiBiZWxvdyBlYWNoCnByb2JsZW0uCgo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiovCgoKLy8gMC4gQ29ubmVjdCB0aGUgbWFpbi5qcyBkb2N1bWVudCB0byB0aGUgSFRNTCBwYWdlLgovKiAgICBBZGQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgSFRNTCBwYWdlOiA8c2NyaXB0IHNyYz0ibWFpbi5qcyI+PC9zY3JpcHQ+Ki8KZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInEwIikuaW5uZXJIVE1MID0gIkpTIFBhZ2UgQ29ubmVjdGVkIFByb3Blcmx5ISI7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJxMCIpLmNsYXNzTGlzdC5hZGQoInN0YXR1cy1nb29kIik7CgoKCgovLyAxLiBPdXRwdXQgZWFjaCBpdGVtIGluIHRoZSBmb2xsb3dpbmcgQXJyYXkgdG8geW91ciBjb25zb2xlIHdpdGhpbiB0aGVpciBvd24gcGFyYWdyYXBoczoKdmFyIGxpdmluZ1Jvb20gPSBbJ2NvdWNoJywgJ2xhbXAnLCAncnVnJywgJ3NoZWxmJ107Cgpmb3IoaT0wOyBpPCBsaXZpbmdSb29tLmxlbmd0aDsgaSsrKXsKICB2YXIgZnVybml0dXJlPSBsaXZpbmdSb29tW2ldOwogIGNvbnNvbGUubG9nKGZ1cm5pdHVyZSk7Cn07CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJxMSIpLmlubmVySFRNTCArPSAoIjxwPlRoZSBjb25zb2xlIHNob3VsZCByZWFkOiAiICsgbGl2aW5nUm9vbSArICI8L3A+Iik7CgovLyAyLiBVc2luZyBhIGxvb3AsIGxvZyBudW1iZXJzIDIyLTMzIHdpdGhpbiB0aGVpciBvd24gcGFyYWdyYXBocy4KCmZvcihpPTIyOyBpPDM0OyBpKyspewogIGNvbnNvbGUubG9nKGkpOwp9Owpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicTIiKS5pbm5lckhUTUwgPSAiVGhlIGNvbnNvbGUgc2hvdWxkIHJlYWQgbnVtYmVycyAyMi0zMyI7CgoKCi8vIDMuIFVzaW5nIGEgc2ltaWxhciBsb29wLCBsb2cgbnVtYmVycyA3NSB0byAxMDAsIG9ubHkgaW4gaW5jcmVtZW50cyBvZiBmaXZlLgoKZm9yKGo9NzU7IGo8PTEwMDsgais9NSl7CiAgY29uc29sZS5sb2coaik7Cn07CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJxMyIpLmlubmVySFRNTCA9ICJUaGUgY29uc29sZSBzaG91bGQgcmVhZCBudW1iZXJzIDc1LTEwMCBieSBpbmNyZW1lbnRzIG9mIDUiOwoKCgovLyA0LiBXcml0ZSBhIHdoaWxlIGxvb3AgdGhhdCBkaXNwbGF5cyBwYXJhZ3JhcGhzIG9mICJUaGlzIGlzIGhvdyBhIHByb2Zlc3Npb25hbCBsb29wcy4iIHRvIHRoZSBIVE1MIHBhZ2UgNSB0aW1lcy4KdmFyIGNvdW50ZXIgPSAwOwp3aGlsZSAoY291bnRlciA8IDUpewoKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInE0IikuaW5uZXJIVE1MICs9ICI8cD5UaGlzIGlzIGhvdyBhIHByb2Zlc3Npb25hbCBsb29wcy48L3A+IjsKY291bnRlciArKzsKfQoKCgoKLy8gNS4gU2VwYXJhdGVseSwgdXNlIGJvdGggYSBmb3IgbG9vcCBhbmQgd2hpbGUgbG9vcCB0byBkbyB0aGUgc2FtZSB0aGluZy4KLy8gICAgIERpc3BsYXkgaW4gdW5pcXVlIHBhcmFncmFwaHMgdGhlIHNlbnRlbmNlICJBdCBob21lLCBJIGhhdmUgX19fX18gY2F0cy4iCi8vICAgICBUaGUgbnVtYmVycyBzaG91bGQgcmFuZ2UgZnJvbSAxMCB0byAxMTAsIGluIGluY3JlbWVudHMgb2YgMjUuCgoKCgoKLy8gNi4gR2l2ZW4gdGhlIGZvbGxvd2luZyBBcnJheSwgZGlzcGxheSBpbiB1bmlxdWUgcGFyYWdyYXBocydFdmVuJyBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sICdFdmVuIGFuZCBncmVhdGVyIHRoYW4gMTAnIGlmIHRoZQovLyAgICBudW1iZXIgaXMgZXZlbiBhbmQgZ3JlYXRlciB0aGFuIDEwLCBhbmQgJ09kZCcgaWYgdGhlIG51bWJlciBpcyBvZGQuCi8vICAgIEhJTlQ6IEdvb2dsZSAncmVtYWluZGVyIG9wZXJhdG9yJwp2YXIgbnVtQXJyYXkgPSBbMiwgMTcsIDksIDI0LCA4XTsKCgoKCgovLyA3LiBVc2luZyB0aGUgZm9sbG93aW5nIEFycmF5LCBjcmVhdGUgdmFyaWFibGUgY2FsbGVkIG51bVRocmVlcyB3aXRoIHRoZSB2YWx1ZSBbMTMsIDIzLCAzMywgNDMsIDUzLCA2MywgNzNdCnZhciBudW1BcnJheSA9IFsxMywgMTUsIDE3LCAyMywgMjUsIDI3LCAzMywgMzUsIDM3LCA0MywgNDUsIDQ3LCA1MywgNTUsIDU3LCA2MywgNjUsIDY3LCA3MywgNzUsIDc3XTsKCgoKCgoKCi8vIDguIFdyaXRlIGEgbG9vcCB0aGF0IG91dHB1dHMgdGhlIGZvbGxvd2luZyB0byB1bmlxdWUgcGFyYWdyYXBoczoKLy8gIwovLyAjIwovLyAjIyMKLy8gIyMjIwovLyAjIyMjIwovLyAjIyMjIyMKLy8gIyMjIyMjIwoKCgoKCgoKLy8gOS4gRklaWiBCVVpaCi8vIFdyaXRlIGEgcHJvZ3JhbSB0aGF0IHVzZXMgY29uc29sZS5sb2cgdG8gcHJpbnQgZWFjaCBudW1iZXIgdXAgdG8gMTAwLCB3aXRoIGEgY291cGxlIGV4Y2VwdGlvbnMuLi4KLy8gSWYgdGhlIG51bWJlciBpcyBkaXZpc2libGUgYnkgMywgcHJpbnQgIkZpenoiIGluc3RlYWQgb2YgdGhlIG51bWJlci4KLy8gSWYgdGhlIG51bWJlciBpcyBkaXZpc2libGUgYnkgNSwgcHJpbnQgIkJ1enoiIGluc3RlYWQgb2YgdGhlIG51bWJlci4KLy8gSWYgdGhlIG51bWJlciBpcyBkaXZpc2libGUgYnkgYm90aCAzIGFuZCA1LCBwcmludCAiRml6ekJ1enoiIGluc3RlYWQgb2YgdGhlIG51bWJlci4KCgoKCgovLyBSTyBTSEFNIEJPIQovLyBXZSdyZSBnb2luZyB0byBjcmVhdGUgYSBwYXBlciwgcm9jaywgc2Npc3NvcnMgZ2FtZSB0aGF0IHByb21wdHMgeW91IGZvciB5b3VyIGNob2ljZSBhbmQgYWxsb3dzIHRoZSBjb21wdXRlciB0bwovLyByYW5kb21seSBjaG9vc2UuIFlvdSB3aWxsIHVzZSBhbiBhbGVydCB0byBkZWZpbmUgdGhlIHdpbm5lci4KCi8vIDEwLiBVc2UgYSB2YXJpYWJsZSBjYWxsZWQgImh1bWFuIiB0byBwcm9tcHQgdGhlIHVzZXIgdG8gdHlwZSB0aGVpciBjaG9pY2UuCi8vIDExLiBEZWZpbmUgYSB2YXJpYWJsZSBjYWxsZWQgImNvbXB1dGVyIiBhbmQgdXNlIE1hdGgucmFuZG9tIHRvIGFsbG93IHRoZSBjb21wdXRlciB0byByYW5kb21seSBzZWxlY3QgYSBudW1iZXIuCi8vICAgICBGb3IgcmVmZXJlbmNlOgovLyAgICAgTWF0aC5yYW5kb20gZ2l2ZXMgeW91IGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEsIHdoaWNoIGlzIGRpZmZlcmVudCBlYWNoIHRpbWUgeW91IGNhbGwgaXQuCi8vIDEyLiBMZXQncyBzdGFydCBvdXIgY29uZGl0aW9uYWwgc3RhdGVtZW50LgovLyAgICAgSWYgdGhlIHJhbmRvbSBjb21wdXRlciBudW1iZXIgZmFsbHMgYmV0d2VlbiAwIGFuZCAuMzMsIHRoZSBjb21wdXRlciBpcyAicm9jayIKLy8gICAgIElmIHRoZSByYW5kb20gY29tcHV0ZXIgbnVtYmVyIGZhbGxzIGJldHdlZW4gLjM0IGFuZCAuNjYsIHRoZSBjb21wdXRlciBpcyAicGFwZXIiCi8vICAgICBJZiB0aGUgcmFuZG9tIGNvbXB1dGVyIG51bWJlciBmYWxscyBiZXR3ZWVuIC42NyBhbmQgMSwgdGhlIGNvbXB1dGVyIGlzICJzY2lzc29ycyIKLy8gMTMuIFVzaW5nIGJvdGggImh1bWFuIiBhbmQgdGhlIGNvbXB1dGVyIGNob2ljZSwgYmVnaW4gYW5vdGhlciBjb25kaXRpb25hbCBzdGF0ZW1lbnQgdG8gY29tcGFyZSB0aGVtLgovLyAxNC4gQWZ0ZXIgY29tcGFyaW5nLCBkZXRlcm1pbmUgd2hvIGhhcyB3b247IHRoZSBjb21wdXRlciBvciB0aGUgaHVtYW4hCi8vIDE1LiBHaXZlIHlvdXJzZWxmIGEgaGlnaCBmaXZlIGZvciBjb21wbGV0aW5nIHlvdXIgZmlyc3QgamF2YXNjcmlwdCBnYW1lIQovLyBCT05VUzogV2hhdCBoYXBwZW5zIGlmIHlvdXIgdXNlciBlbnRlcnMgc29tZXRoaW5nIG90aGVyIHRoYW4gInJvY2siLCAicGFwZXIiLCBvciAic2Npc3NvcnM/Ii4gQ2hhbmdlIHlvdXIgZGVmYXVsdCBjYXNlCi8vICAgICB0byBwcmludCBhIHNuYXJreSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIGlmIHRoZSBpbnB1dCBkb2Vzbid0IG1hdGNoIGFueSBvZiB0aGUgb3B0aW9ucy4KCgoKCgoKCi8vIEFEVkFOQ0VEIFRSQUNLCi8vIDE2LiBXcml0ZSBhIGNvbmRpdGlvbmFsIHN0YXRlbWVudCB0byBmaW5kIHRoZSBsYXJnZXN0IG9mIHRoZSBudW1iZXJzIGluIHRoZSBhcnJheSBwcm92aWRlZC4KdmFyIGxhcmdlc3ROdW0gPSBbLTUsIC0yLCAtNiwgMCwgLTFdCgoKCgovLyBIRUFEUyBPUiBUQUlMUz8KLy8gMTcuIFVzZSB0aGUgZm9sbG93aW5nIHZhcmlhYmxlIGZvciB5b3VyIGNvaW4gZmxpcCBhY3Rpb246CiAgICAgICB2YXIgY29pbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOwovLyAgICAgV2UncmUgdXNpbmcgTWF0aC5yYW5kb20gYWdhaW4sIGFsb25nIHdpdGggTWF0aC5mbG9vci4KLy8gICAgIFJlbWVtYmVyLCBNYXRoLnJhbmRvbSBnaXZlcyB5b3UgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMS4KLy8gICAgIENhbGxpbmcgTWF0aC5mbG9vciBvbiB0aGF0IG51bWJlciB3aWxsIHRydW5jYXRlIHRoZSBkZWNpbWFsLCBhbmQgZ2l2ZSB5b3UgYQovLyAgICAgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGJvdW5kcyBvZiB5b3VyIGFycmF5LiAoSW4gdGhpcyBjYXNlLCBvdXIgYXJyYXkgd2lsbCBvbmx5IGNvbnRhaW4gdHdvIGl0ZW1zLikKCgoKCgoKLy8gMTguIFVzZSBhIGRvL3doaWxlIGxvb3AgdG8ga2VlcCBmbGlwcGluZyB0aGUgY29pbiB1bnRpbCB5b3UgZ2V0IHRhaWxzLgoKCgoKCgovLyBDSEVTUyBCT0FSRAovLyAxOS4gV3JpdGUgYSBwcm9ncmFtIHRoYXQgY3JlYXRlcyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgYW4gOMOXOCBncmlkLCB1c2luZyBuZXdsaW5lIGNoYXJhY3RlcnMgdG8gc2VwYXJhdGUgbGluZXMuCi8vIEF0IGVhY2ggcG9zaXRpb24gb2YgdGhlIGdyaWQgdGhlcmUgaXMgZWl0aGVyIGEgc3BhY2Ugb3IgYSDigJwj4oCdIGNoYXJhY3Rlci4gVGhlIGNoYXJhY3RlcnMgc2hvdWxkIGZvcm0gYSBjaGVzcyBib2FyZC4KCi8vUGFzc2luZyB0aGlzIHN0cmluZyB0byBjb25zb2xlLmxvZyBzaG91bGQgc2hvdyBzb21ldGhpbmcgbGlrZSB0aGlzOgoKLy8gICMgIyAjICMKLy8gIyAjICMgIwovLyAgIyAjICMgIwovLyAjICMgIyAjCi8vICAjICMgIyAjCi8vICMgIyAjICMKLy8gICMgIyAjICMKLy8gIyAjICMgIwoKCgoKCgovLyAyMC4gV2hlbiB5b3UgaGF2ZSBhIHByb2dyYW0gdGhhdCBnZW5lcmF0ZXMgdGhpcyBwYXR0ZXJuLCBkZWZpbmUgYSB2YXJpYWJsZSBzaXplID0gOCBhbmQgY2hhbmdlIHRoZSBwcm9ncmFtCi8vIHNzbyB0aGF0IGl0IHdvcmtzIGZvciBhbnkgc2l6ZSwgb3V0cHV0dGluZyBhIGdyaWQgb2YgdGhlIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHQuCgoKCgoKCgoKCi8qIFNBTkRCT1ggVFJBQ0sKClNvbHZpbmcgYWxsIG9mIHRoZXNlIHByb2JsZW1zIGlzIGEgZ3JlYXQgc3RlcCBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uLApidXQgdGhlIG5leHQgc3RlcCBpcyBjb21pbmcgdXAgd2l0aCB5b3VyIG93biBhcnJhbmdlbWVudHMgdG8gc29sdmUKbmV3IHByb2JsZW1zLiBQcmFjdGljZSBjcmVhdGluZyB5b3VyIG93biBwcm9ibGVtcyB0byBzb2x2ZSBhbmQgdGhlaXIgc29sdXRpb25zIC0KeW91IGNhbiBldmVuIGNoYWxsZW5nZSB5b3VyIGNsYXNzbWF0ZXMhCgpBbHNvLCBjb25zaWRlciBob3cgeW91IGNhbiBhZGQvcmVtb3ZlIENTUyBzdHlsZXMgdG8gY3JlYXRlIGFkZGVkIHByZXNlbnRhdGlvbiB3aXRoIHRoZSByZXN1bHRzLgoKKi8K"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for (i = 0; i < livingRoom.length; i++) {
    var furniture = livingRoom[i];
    console.log(furniture);
};
document.getElementById("q1").innerHTML += ("<p>The console should read: " + livingRoom + "</p>");

// 2. Using a loop, log numbers 22-33 within their own paragraphs.

for (i = 22; i < 34; i++) {
    console.log(i);
};
document.getElementById("q2").innerHTML = "The console should read numbers 22-33";



// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

for (j = 75; j <= 100; j += 5) {
    console.log(j);
};
document.getElementById("q3").innerHTML = "The console should read numbers 75-100 by increments of 5";



// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.
var counter = 0;
while (counter < 5) {

    document.getElementById("q4").innerHTML += "<p>This is how a professional loops.</p>";
    counter++;
}




// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.
document.getElementById("q5").innerHTML = "<p>While Loop:</p>";
var counter = 10;
while (counter <= 110) {
    document.getElementById("q5").innerHTML += "<p>At home, I have " + counter + " cats.</p>";
    counter += 25
};
document.getElementById("q5").innerHTML += "<p>For Loop:</p>";
for (i = 10; i <= 110; i += 25) {
    document.getElementById("q5").innerHTML += "<p>At home, I have " + i + " cats.</p>";
};
// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

for (i = 0; i < numArray.length; i++) {
    var num = numArray[i];
    if ((num % 2 === 0) && (num > 10)) {
        document.getElementById("q6").innerHTML += "<p>Even and greater than ten: " + num + "</p>";
    } else if (num % 2 === 0) {
        document.getElementById("q6").innerHTML += "<p>Even: " + num + "</p>";
    } else {
        document.getElementById("q6").innerHTML += "<p>Odd:  " + num + "</p>";

    }
};


// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];

var numThrees = [];
for (i = 0; i < numArray.length; i += 3) {
    var num = numArray[i];
    numThrees.push(num);
}

document.getElementById("q7").innerHTML = "<p>New Array:  " + numThrees + "</p>";



// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var hashTag = ''
for (var i = 0; i < 8; i++) {
    document.getElementById("q8").innerHTML += "<p>" + hashTag + "</p>";
    hashTag += '#'
};







// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
document.getElementById("q9").innerHTML += "<p>Answers in the console</p>";
for (i = 0; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log('FizzBuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i)


    }
};


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.







var userChoice = prompt("Do you choose rock, paper or scissors?");

var human = userChoice.toLowerCase() || "unicorn";
if(human === false){
  document.getElementById("q10").innerHTML = "<p>Game voided</p>";
}
var computerChoice = Math.random();


if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";

};


var compare = function(human, computerChoice) {
    document.getElementById("q10").innerHTML = "<p>Game results this round: Human: " + human + " Computer: " + computerChoice + "</p>";

    if (human === computerChoice) {
        window.alert("The result is a tie!");
    } else if (human === "rock") {
        if (computerChoice === "scissors") {
            window.alert("You Win! Rock beats Scissors.");
        } else {
            window.alert("You Lose! Paper beats Rock.");
        }
    } else if (human === "paper") {
        if (computerChoice === "scissors") {
            window.alert("You Lose! Scissors beats Paper.");
        } else {
            window.alert("You Win! Paper beats Rock.");
        }
    } else if (human === "scissors") {
        if (computerChoice === "rock") {
            window.alert("You Lose! Rock beats scissors.");
        } else {
            window.alert("You Win! Scissors beats Paper.");
        }
    } else if (human === "unicorn") {
        window.alert("You didn't enter a valid choice so you get unicorn. Game over!");
    }


};
//++++++++++++++++++++++++++++++++original solution
// var compare = function(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {
//     window.alert("The result is a tie!");
//   } else if (userChoice === "rock") {
//     if (computerChoice === "scissors") {
//       window.alert("You Win! Rock beats Scissors.");
//     } else {
//       window.alert("You Lose! Paper beats Rock.");
//     }
//   } else if (userChoice === "paper") {
//     if (computerChoice === "rock") {
//       window.alert("You Win! Paper beats Rock.");
//     } else {
//       window.alert("You Lose! Scissors beats Paper.");
//     }
//   } else if (userChoice === "scissors") {
//     if (computerChoice === "rock") {
//       window.alert("You Lose! Rock beats scissors.");
//     } else {
//       window.alert("You Win! Scissors beats Paper.");
//     }
//   }
// };

document.getElementById("q10").innerHTML = "<p>Game results this round: Human: " + human + " Computer: " + computerChoice + "</p>";









// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.



var numberBlock = [-5, -2, -6, 0, -1]

var biggestNum = numberBlock[0];

for (i = 0; i < numberBlock.length; i++) {
    if (numberBlock[i] > biggestNum) {
        biggestNum = numberBlock[i]
    }
}

document.getElementById("q16").innerHTML += "The largest number is " + biggestNum;
// document.getElementById("q16").innerHTML = "<p>Sorted Array: " + sorted +"</p>";

// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)






// 18. Use a do/while loop to keep flipping the coin until you get tails.



var sides = ["heads", "tails"];

var result = sides[coin];


function flip() {

    while (coin >= 1) {
        console.log(result);
        return (result);
    };
}
document.getElementById('coinbtn').addEventListener('click', function() {
    document.getElementById("q18").innerHTML += "You will only see tails here: " + flip();
});

// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #






// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.









/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
