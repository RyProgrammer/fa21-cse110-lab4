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