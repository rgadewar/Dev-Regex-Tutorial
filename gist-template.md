# DEV-REGEX-TUTORIAL

In this tutorial, we'll dive into the captivating world of regular expressions, often referred to as Regex. Regular expressions are essentially combinations of characters that form unique patterns. They serve as powerful tools within code or algorithms, enabling you to locate or even replace specific patterns within text strings. For example, you can utilize regular expressions to validate user passwords, detect phone numbers, identify email addresses, URLs, and an array of other data patterns.

## Summary

In our upcoming exploration, we'll delve into a new regular expression, one that seeks to identify and extract URLs from a given text. Our regex contender is
\bhttps?://[^\s/$.?#].[^\s]\*\b
This regex is designed to locate both HTTP and HTTPS URLs within text content.

## Table of Contents

- [Email Validation](#email-validation)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Email Validation

Breaking down our robust Regular Expression pattern \b[a-z0-9#$_-]+@[a-z0-9]+.[a-z]{2,3}\b/gi:

At its core, the essence of this expression lies in the \b, referred to as "word boundaries." This signifies that the pattern should match as an isolated word (or string). For example, consider parentheses without spaces in between – without these boundaries, validation would likely fail as it wouldn't match correctly.

Moving on to the initial group [a-zA-Z0-9#ParseError: KaTeX parse error: Expected 'EOF', got '#' at position 84: …the characters #̲\_-. The hyphen (-) placed between "a" and "z" signifies that any letter in that range is acceptable. Similarly, 0-9 indicates the same for numbers. The plus (+) sign, acting as a quantifier, indicates that any of these characters before it can occur one or more times. For instance, TechEnthusiast42 is a valid match. The square brackets are known as a "character class," which will be explained further below. If you're wondering how the Regex distinguishes between uppercase and lowercase letters, the answer lies in the "i" flag at the end, which makes it case-insensitive.

Next comes the @ symbol, a fundamental requirement for identifying email addresses.

The subsequent group [a-z0-9]+ also matches uppercase and lowercase letters, numbers, with the plus (+) sign outside the brackets signifying one or more occurrences. So, a username like "nada1" is perfectly valid.

After that, we encounter the dot (.) which represents the period before the domain extension (com, gov, ca, etc.), escaped for clarity.

Lastly, there's [a-z]{2,3], encompassing the domain extension. This part is twofold. First, [a-z] signifies the range of characters from 'a' to 'z,' including uppercase. The {2,3} is a fixed quantifier, specifying the minimum and maximum length for the extension. For example, "au" for Australia, "edu" for a school, and "dd" for Germany.

Together, they form email addresses like TechEnthusiast42@ecba2.com or simply TechEnthusiast42@ecba2.com!

I'll provide an image demonstrating the validation in action. It features the prominent TechEnthusiast42@ecba2.com as successful validation proof, along with two other passing emails (all highlighted in blue), and one that didn't pass (easily identifiable as a failure). Additionally, I've included JavaScript code that can be used through your browser's developer tools for testing, along with a screenshot showcasing the outcomes (true = pass, false = fail).

### Anchors

In regular expressions, anchors are special characters used to define specific positions within a text where a match should occur. Anchors are crucial for creating precise patterns in your regex searches. One common anchor is \b, which denotes a word boundary. By using \b at the beginning and/or end of your regex pattern, you enforce what's known as a "whole word" search.

For instance, consider the regex pattern \b867530\b. This pattern will match only the exact sequence "867530" within the text but not "8675309." This ensures that your regex accurately locates complete words or sequences, preventing unintended matches.

There are other anchors in regex, including ^ and $:

    ^ asserts the start of a line or string. For example, ^XXXXX will match any string that begins with "XXXXX."

    $ asserts the end of a line or string. For instance, XXXXX$ will match any string that ends with "XXXXX."

Anchors are considered "meta-characters" because they don't match actual characters but instead represent specific positions within the text. For instance, ^ signifies the starting position right before the first character of the search string, and $ signifies the end of the last character. Combining these anchors with other regex elements allows you to precisely define where and how your pattern should match within a given text.

### Quantifiers

In the realm of regular expressions, quantifiers serve as powerful repeaters. They enable you to specify how many times the preceding item should be repeated in your search pattern—whether it's zero times, once, or multiple times. Think of quantifiers as the workhorses that control the repetition behavior of your regex patterns.

One commonly used quantifier is the + symbol, and it belongs to a group known as "greedy quantifiers." When you apply + to the preceding item, it indicates that the collection of characters just before it can repeat one or more times. The term "greedy" implies that it will match as many instances as possible while still allowing the overall pattern to succeed.

For instance, if you're searching for the pattern abc+, it will match "ab" followed by one or more "c" characters, such as "abccc" or "abcccccc."

In contrast, there are fixed quantifiers like {2,3}, which precisely specify the number of repetitions. In this case, {2,3} mandates that the preceding item must occur between 2 and 3 times. For example, it will match patterns like "abc" or "abcc," but not "ab" or "abccc."

Simpler quantifiers also exist, such as {3,}. This quantifier indicates that the preceding item must repeat at least 3 times or more. Much like the "greedy quantifier," it allows multiple repetitions, making it an ideal choice when you want to match patterns with varying lengths.

In summary, quantifiers are your tool of choice when you need to control the repetition of characters or patterns in your regular expressions. They offer flexibility and precision, enabling you to craft regex patterns that accurately capture the desired content in your text data.

### OR Operator

The OR operator in regular expressions, represented by the vertical bar |, allows you to specify multiple alternatives for a pattern. It essentially functions as a logical OR, matching any of the alternatives it separates.

For example, consider the regex pattern cat|dog. This pattern will match either "cat" or "dog" in the input text. If you apply this regex to the input "I have a cat and a dog," it will match both "cat" and "dog."

### Character Classes

Character classes, despite the evocative name, are not related to your D&D half-orc, Grumblethrust. Instead, they refer to the characters enclosed within square brackets [ ] in a regular expression. These brackets define a set of characters that your regex will attempt to match within the given text.

For example, consider the character class [abceasyas123]. This class will successfully match any of the characters listed inside it: 'a', 'b', 'c', 'e', 's', 'y', '1', '2', or '3'. It's like having a checklist of characters to search for.

However, there's a more concise way to specify longer ranges of characters. As seen earlier, [a-z] denotes that any character between 'a' and 'z', inclusive of both upper and lower case (assuming the 'i' flag is set), should be matched. This can be quite handy for matching letters within a certain range without explicitly listing them all.

You can also create more complex character classes by combining them. For example, [a-z[aeiou]] will match only consonants because it combines the range [a-z] with the exclusion of vowels [aeiou].

In essence, character classes provide a versatile tool for specifying which characters your regular expression should target within your text data. Whether you need to match specific characters or ranges, character classes help you craft precise patterns for your regex searches.

### Flags

Let's take a moment to revisit the concept of flags in regular expressions. Flags are modifiers that you can append to a regex pattern to change its behavior or extend its capabilities. They serve as control switches, fine-tuning how your regex searches and matches text within your data.

An example of a flag in a regex pattern is the 'i' flag, as seen in the regex \b[a-z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/i. This 'i' flag stands for "case-insensitive," and it's placed at the end of the pattern. What it does is allow the regex to match both upper and lower case characters without explicitly specifying them. For instance, [a-zA-Z0-9] becomes unnecessary when 'i' is present, as it covers both upper and lower case.

Another important flag to keep in mind is the 'g' flag. When used on its own, the 'g' flag enables global searching within a text. It means that the regex will find all instances of the defined pattern, not just the first occurrence.

Now, if you want to combine global searching with case insensitivity (matching upper and lower case characters), you can use both 'g' and 'i' together, as in 'gi'. This powerful combination performs a global search while treating upper and lower case characters as equivalent. It's like creating a crossover event as ambitious as Avengers: Endgame, covering both widespread searches and case-matching versatility.

In summary, flags are an essential tool for adapting your regex patterns to specific requirements. Whether you need case-insensitive matching, global searches, or a combination of both, flags empower you to tailor your regex to precisely match and extract the desired text from your data.

### Grouping and Capturing

Grouping and capturing are essential features of regular expressions that allow you to match and extract specific parts of a text. You can use parentheses () to create groups within your regex pattern. These groups serve several purposes:

Grouping for Alternatives: Parentheses are often used to group alternative options together. For example, (apple|banana) matches either "apple" or "banana."

Capturing: Groups also serve as capture groups. When a portion of text matches a group, that matched portion is captured and can be accessed separately. This is especially useful when you want to extract specific information from a larger text.

Quantifiers Apply to Groups: You can apply quantifiers to groups, specifying how many times the entire group should repeat. For instance, (ab)+ matches "ab," "abab," "ababab," and so on.

Here's how grouping and capturing work in practice:

Example 1: Extracting Dates
Suppose you have a text with dates in the format "MM/DD/YYYY," and you want to extract the month, day, and year separately.
(\d{2})/(\d{2})/(\d{4})
(\d{2}) captures the month (e.g., "05").
(\d{2}) captures the day (e.g., "23").
(\d{4}) captures the year (e.g., "2023").

    \b(\w+)\s+\1\b
        \b defines a word boundary.
        (\w+) captures a word.
        \s+ matches one or more spaces.
        \1 is a back-reference to the first captured group, ensuring it repeats.
        \b again defines a word boundary.

This regex will match repeated words like "the the" or "apple apple."

In summary, grouping and capturing allow you to structure your regular expressions for both matching and extracting specific information from text. They are invaluable when you need to work with structured data within unstructured text.

### Bracket Expressions

Bracket expressions, denoted by square brackets [], serve as a straightforward mechanism for defining character classes within regular expressions. Any characters placed within these brackets specify a set of characters that your regex pattern will attempt to match. However, you can introduce additional complexity by including the negate character ^, which, when placed at the beginning of the character class, instructs the regex to match any character not listed within it.

For instance, consider the character class [a-z]. This expression defines a character class that matches any character within the alphabet, including both upper and lower case characters (thanks to the 'i' flag for case insensitivity).

Additionally, you can create more intricate character classes. For example, [a-z[aeiou]] constructs a character class that matches only consonants, effectively excluding all vowels from consideration.

Bracket expressions are a fundamental element of regex that allows you to specify precisely which characters or types of characters your pattern should target within your text data. They provide flexibility in defining character sets and patterns, enhancing your ability to craft regex patterns that suit your specific requirements.

### Greedy and Lazy Match

The concept of greedy and lazy quantifiers is fundamental in the world of regular expressions, influencing how quantified elements are matched within your patterns. These quantifiers control the behavior of repetition, determining whether to maximize or minimize the number of repetitions.

Greedy Quantifiers: Greedy quantifiers, much like the wealth-loving Scrooge McDuck, aim to accumulate as many matches as possible. For example, the + quantifier used in regex patterns is a classic example of greediness. It matches the preceding element one or more times, grabbing the longest possible match. In other words, it strives to encompass as much text as it can while still allowing the overall pattern to succeed. This can lead to a broader, more comprehensive match.

Lazy Matching: In contrast, lazy matching takes a more conservative approach. It's akin to an R2 droid with a malfunctioning motivator—it attempts to match the regex pattern just once and then stops. Lazy quantifiers are denoted by appending a ? to the quantifier (e.g., +? or \*?). They prefer the shortest possible match, seeking to fulfill the pattern's requirements with the minimal amount of text. This approach results in narrower, more concise matches.

For example, consider the text "aaaa" and the regex pattern a+. With a greedy quantifier, this pattern would match the entire "aaaa" because it aims to maximize the number of 'a' characters. In contrast, a lazy quantifier (a+?) would match only the first 'a,' producing a shorter match.

The choice between greedy and lazy quantifiers depends on your specific use case. Greedy quantifiers are suitable when you want to capture the most extensive content possible, while lazy quantifiers are preferable when you seek the shortest match that fulfills your regex pattern. Understanding these quantifiers empowers you to fine-tune your regular expressions for optimal text extraction and manipulation.

### Boundaries

Boundaries are important in and outside of code, but we're talking strictly about code here. The example that is defining the "red light/green light" for our example above is the \b at the start and end of the Regex. This indicates that a match will only occur if the string is matched in isolation, AKA is a whole word. To beat the digital horse mentioned above, if the Regex was \b867530\b, then not only do we ruin a great song, but it will never match up with 8675309 only 867530.

### Back-references

Back-references are a powerful feature in regular expressions that allow you to match the same text that was previously captured by a capturing group. They are particularly useful when you want to find repeated patterns or ensure that the same text appears multiple times within a string.

To create a back-reference, you use the \ followed by a number, where the number corresponds to the order of the capturing group you want to reference. Here's how you can use back-references:

Example 1: Matching Repeated Words
Suppose you want to find repeated words in a text and ensure that they are repeated consecutively. You can achieve this using a back-reference:

    \b(\w+)\s+\1\b
        \b defines a word boundary.
        (\w+) captures a word.
        \s+ matches one or more spaces.
        \1 is a back-reference to the first captured group, ensuring it repeats.
        \b again defines a word boundary.

With this regex, you can find and capture repeated words like "the the" or "apple apple" but not "the quick brown."

### Look-ahead and Look-behind

Look-ahead and look-behind assertions are advanced features in regular expressions that allow you to search for patterns that are followed by or preceded by specific conditions without including those conditions in the actual match. They are expressed using (?= ... ) for look-ahead and (?<= ... ) for look-behind.

Look-ahead Assertions
Positive Look-ahead (?= ...): A positive look-ahead assertion checks if a certain pattern exists after the current position in the text, but it doesn't consume any characters. It ensures that a match only occurs if the condition within the look-ahead assertion is met.

For example, if you want to match a word that is followed by "apple," you can use a positive look-ahead:
\w+(?= apple)
\w+ matches one or more word characters (letters, digits, or underscores).
(?= apple) is a positive look-ahead that checks if the word is followed by "apple" without including "apple" in the match.
This regex will match words like "green" in "green apple" but not "red" in "red delicious apple."

Negative Look-ahead (?! ...): A negative look-ahead assertion checks if a certain pattern does not exist after the current position. It ensures that a match occurs only if the condition within the negative look-ahead is not met.

For example, if you want to match words that are not followed by "apple," you can use a negative look-ahead:
\w+(?! apple)
\w+ matches one or more word characters.
(?! apple) is a negative look-ahead that ensures the word is not followed by "apple."
This regex will match words like "red" in "red delicious" but not "green" in "green apple."

Look-behind Assertions
Positive Look-behind (?<= ...): A positive look-behind assertion checks if a certain pattern exists immediately before the current position, without including it in the match.

For example, if you want to match numbers that are preceded by a dollar sign, you can use a positive look-behind:
(?<=\$)\d+
(?<=\$) is a positive look-behind that checks for the presence of a dollar sign.
\d+ matches one or more digits.
This regex will match numbers like "100" in "$100" but not "50" in "50%."

Negative Look-behind (?<! ...): A negative look-behind assertion checks if a certain pattern does not exist immediately before the current position.

For example, if you want to match words that are not preceded by the word "not," you can use a negative look-behind:
(?<!not )\w+
(?<!not ) is a negative look-behind that ensures the word is not preceded by "not."
\w+ matches one or more word characters.
This regex will match words like "good" in "good idea" but not "not" in "not good."

Look-ahead and look-behind assertions are powerful tools for creating complex patterns and conditions in your regular expressions. They allow you to match text based on what comes before or after it without including those preceding or following parts in the final match.

## Validation
![Image 1](assets/images/UI_view.png)   

## Author

Rupa is someone who loves programming and creativity. She enjoys learning how things work and relishes the opportunity to add her personal touch to everything she can. Rupa also has a quirky habit of referring to herself in the third person. Her passion lies in the fascinating world of technology and programming, which she explores through the University of Austin's Full Stack Bootcamp. As she delves deeper into her studies, Rupa has found herself particularly drawn to enhancing the user experience, a realm where she can combine her love for programming and creativity."

Rupa Gadewar https://github.com/rgadewar
