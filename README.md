# jquery.logging
Logging values in jQuery to the console if availible. 

## Include
Include this in the page before calling your scripts

`<script src="http://code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>`

`<script src="jquery.logging.js" type="text/javascript"></script>`
    
## Usage in script block
    <script type="text/javascript">
        // Object
        var person = new Object({ firstname: "John", lastname: "Doe", age: 50, eyecolor: "blue" });
        $(this).logging(person);
    
        // String
        $(this).logging('Hello World');
    
        // Integer
        $(this).logging(123);
    
        // Boolean
        $(this).logging(true);
    </script>
