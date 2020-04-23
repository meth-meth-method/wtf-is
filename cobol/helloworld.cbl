       >>SOURCE FORMAT FREE
IDENTIFICATION DIVISION.
PROGRAM-ID.  Multiplier.
AUTHOR.  Meth Meth Method
*> Example program using PERFORM, ACCEPT, TIMES
*> collect a number of user definable integers and mulitply them 
*> with low memory footprint and display the result.

DATA DIVISION.

WORKING-STORAGE SECTION.
01  StepCurrent                          PIC 9  VALUE ZEROS.
01  StepLast                             PIC 9  VALUE ZEROS.
01  Factor                               PIC 9  VALUE ZEROS.
01  Product                              PIC 99 VALUE 1.

PROCEDURE DIVISION.
    MAIN-PARA.
    DISPLAY "How many numbers (1 digit)? : " WITH NO ADVANCING.
    ACCEPT StepLast.
    DISPLAY "Will multiply ", StepLast, " numbers"
    PERFORM CALC-PARA StepLast TIMES.
    DISPLAY "Result is = ", Product.
    STOP RUN.

    CALC-PARA.
    ADD 1 To StepCurrent.
    DISPLAY "Enter number ", StepCurrent, "/", StepLast, " (1 digit) : " WITH NO ADVANCING.
    ACCEPT Factor.
    MULTIPLY Factor BY Product GIVING Product.
