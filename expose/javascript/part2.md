1. *3* is printed because *i* is a var type, so it is accessible outside the *for* block.
2. *150* is printed because *discountedPrice* is a var type, so it is accessible outside the *for* block.
3. *150* is printed because *finalPrice* is a var type and is not restricted access to one block.
4. *[50, 100, 150]* is returned because it is a var type and is not restricted access to one block.
5. Error, because *i* is a let type, thus is restricted to the *for* block and cannot be accessed from outside it.
6. Error, because *i* is a let type, thus is restricted to the *for* block and cannot be accessed from outside it.
7. *150* is printed because although *finalPrice* is a let type, it is declared within the *function* block outside the *for* block, therefore is still accessible at this point.
8. *[50, 100, 150]* is returned because although *discounted* is a let type, it is declared within the *function* block outside the *for* block, therefore is still accessible at this point.
9. Error, because *i* is a let type, thus is restricted to the *for* block and cannot be accessed from outside it.
10. *3* is printed, because the const rule of no change is preserved for *length*.
11. Error, because *discounted* is being changed even though it is a const type.
12. A) student.name B) student['Grad Year'] C) student.greeting() D) student['Favorite Teacher'].name E) student.courseLoad[0]
13. 
    A) *'32'* was the output. This is because the *2* was converted to a character to fit the plus operator, thus was concatenated with the first char to make a string.

    B) *1* was the output. This is because *'3'* was converted to a number to fit the minus operator, thus *2* was subtracted from it.

    C) *3* was the output. This is because *null* is nothing, therefore nothing was added to *3*.

    D) *'3null'* was the output. This is because *null* was converted to a string, thus concatenated with *'3'*.

    E) *4* was the output. This is because *true* was converted to *1* (a binary representation of the boolean), therefore *1 + 3 = 4*.

    F) *0* was the output. This is because *false* was converted to its binary equivalent *0* and *null* is a nothing value, thus *0 + 0 = 0*.

    G) *'3undefined'* was the output. This is because *undefined* was converted to a string, thus concatenated with *'3'*.

    H) *NaN* was the output. This is because there is no possible conversion between a char and undefined type.
14. 
    A) *true* was the output. This is because *'2'* was converted to a number, thus *2 > 1* was returned.

    B) *false* was the output. This is because both values are strings, therefore are compared alphabetically.

    C) *true* was the output. This is because *'2'* was converted to a number, thus is the same as *2*.

    D) *false* was the output. This is because they are compared as their initial types (with *===*), therefore are not the same.

    E) *false* was the output. This is because *true* is converted to its binary value *1*, thus *1 == 2* was returned.

    F) *true* was the output. This is because *2* was typecasted to a boolean value, thus converted to *true* (the same as the LHS).
15. The difference is that *===* takes the type of both sides into consideration, while *==* does not.
17. *[2, 4, 6]* would be the result. This is because *modifyArray* will iterate through the passed-in array and apply the passed-in callback function to each element, doubling them and returning the new array described.
19. *1, 3, 4, 2* is printed (each comma is a new line).