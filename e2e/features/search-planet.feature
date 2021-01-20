Feature: Search for a Star Wars Planets
    
    Background:
        Given I navigate to "localhost"

    Scenario Outline: Search a planet  
        When I search for planet "<planet>" 
        Then I see planet with "<planet>" details

        Examples:
            | planet | 
            | Hoth  |  
            | tooi |
            




