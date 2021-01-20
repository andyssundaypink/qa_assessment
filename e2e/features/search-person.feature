Feature: Search for a Star Wars character
    
    Background:
        Given I navigate to "localhost"
        
     Scenario Outline: Search character  
        When I search for "<character>" name
        Then I see character with "<character>" details

        Examples:
            | character | 
            | Luke  |  
            | Ric Olié | 
            | Luke Skywalker |
            | C-3PO  |
            | Darth |

   