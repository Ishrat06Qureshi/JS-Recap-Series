// // Get the first character of the title Inception, convert it to uppercase, and concatenate it with the rest of the title.
// Slice the first 4 characters from Fight Club and concatenate them with The Dark Knight.
// Find the index of the letter "C" in Pulp Fiction, slice from that index to the end, and convert the substring to uppercase.
// Split the title Forrest Gump into words, join them with a hyphen (-), and replace all "o"s with "0".
// Check if The Godfather includes the letter "t". If true, find the index and slice the title from that index onwards.
// Split the title The Matrix into words, get the first character of each word, convert them to uppercase, and join them back.
// Find the last occurrence of the letter "e" in Interstellar and return the substring from the start to that index.
// Replace the word "Knight" with "warrior" in The Dark Knight and convert the entire title to lowercase.
// Split The Shawshank Redemption by spaces, slice the first two words, and concatenate them back with spaces.
// Find the index of "Redemption" in The Shawshank Redemption, slice the title up to that point, and concatenate it with Fight Club.


// Split The Godfather by spaces, get the first character of each word, and concatenate them with no spaces.
// Get the length of Forrest Gump, slice the title from the midpoint to the end, and concatenate it with Inception.
// Find the index of the letter "r" in Interstellar, replace all occurrences of "r" with "*", and concatenate the result with The Matrix.

// Split the director's name Christopher Nolan by spaces, convert each part to uppercase, and join them with a hyphen.

// Slice the last 3 characters of Fight Club, convert them to uppercase, and concatenate them with the first 3 characters of The Matrix.

// Get a substring of The Lord of the Rings from index 4 to 15, replace all spaces with underscores, and concatenate it with The Matrix.

// Find the last index of the letter "e" in The Shawshank Redemption, slice the title until that index, and concatenate it with Inception.

// Split Pulp Fiction into words, replace "Fiction" with "Story", and join the parts back together with spaces.

// Replace all "a"s in The Godfather with "@", slice the title from index 4 to 10, and concatenate it with Interstellar.

// Split Fight Club into an array of characters, reverse the array, and join it back together as a reversed string.

// 1. Format Phone Numbers
// Given a raw phone number string (e.g., "1234567890"), write a function that formats it in a user-friendly way, such as "(123) 456-7890". (Use slice(), replace(), and concat()).
// 2. Extract Area Codes
// Given a list of formatted phone numbers (e.g., "(123) 456-7890"), extract the area codes. (Use substring(), slice(), and match()).
// 3. Generate Shortened Names for Push Notifications
// Mobile push notifications often have limited space. Write a function that truncates a name if it exceeds a specified character limit, appending "..." at the end if truncated. (Use slice(), concat(), and conditional logic).
// 4. Sanitize User Input for Mobile Forms
// Create a function that sanitizes user input from a mobile form, removing or replacing special characters and preventing potential injection attacks (e.g., converting <script> tags). (Use replace(), match(), and regular expressions).
// 5. Validate Mobile App Version Strings
// Write a function to validate a version string (e.g., "1.0.3-beta") in mobile apps, ensuring that it follows a pattern like major.minor.patch[-prerelease]. (Use split(), match(), and regex).
// 6. Generate Random Usernames for Mobile Chat Apps
// Create a function to generate random usernames by combining random words or phrases. Ensure they follow a character limit for display purposes on mobile. (Use Math.random(), concat(), and slice()).
// 7. Create Hashtags from User Posts
// In a mobile app where users can post content, write a function that generates hashtags by extracting keywords from a given text, converting them to lowercase and removing special characters. (Use split(), replace(), and concat()).
// 8. Abbreviate Full Names for Profile Cards
// Mobile apps often abbreviate long names for profile cards. Write a function that abbreviates the middle name of a full name (e.g., "John A. Doe"). Ensure it handles cases where middle names are not present. (Use split(), slice(), and replace()).
// 9. Parse Mobile Device Identifiers
// Given a string that represents a mobile device identifier (e.g., "android-xx-1234"), write a function that extracts the platform (e.g., "android" or "ios") from the string. (Use split(), includes(), and substring()).
// 10. Generate Device-Optimized Messages
// Mobile screens are small, so write a function that generates device-optimized messages. Truncate long strings but ensure that important parts of the message (like URLs) remain visible. (Use slice(), replace(), and regex).
// 11. Highlight Keywords in Search Results
// In a mobile search interface, write a function that highlights keywords in search results by wrapping the matching text in <mark> tags for easier identification. (Use replace(), split(), and regex).
// 12. Validate Email Addresses for Mobile Forms
// Write a function that validates email addresses entered on a mobile app form. The function should ensure that the email follows the standard format (e.g., user@domain.com). (Use match(), replace(), and regular expressions).
// 13. Create Short URLs for Sharing
// Write a function that takes a long URL and generates a shortened version for mobile sharing, keeping the domain intact but truncating long paths. (Use slice(), substring(), and replace()).
// 14. Check for Strong Passwords
// Create a function that validates if a password entered on a mobile registration form is strong enough (e.g., at least 8 characters, includes numbers, uppercase letters, and special characters). (Use match(), length, and regex).
// 15. Extract App-Specific URLs from Text Messages
// Write a function that scans text messages or user input for app-specific URLs (e.g., myapp://action?id=12345) and extracts the action and ID parameters. (Use split(), substring(), and replace()).
// 16. Handle International Phone Numbers
// For a mobile app supporting multiple countries, write a function to format and validate international phone numbers. Ensure that numbers starting with a "+" sign (e.g., +1-234-567-8900) are handled correctly. (Use replace(), match(), and regex).
// 17. Localize Date Formats for Mobile UI
// Mobile apps often need to localize date formats. Write a function that converts a date string (e.g., "2024-10-10") into a human-readable format (e.g., "October 10, 2024") based on the locale. (Use split(), concat(), and join()).
// 18. Remove Emojis from User Input
// Emojis can take up significant space in mobile inputs. Write a function that removes all emojis from a string entered in a mobile chat app. (Use replace(), regex, and Unicode character matching).
// 19. Create "Typing" Indicators for Chat Apps
// In a mobile chat app, write a function that generates a "typing..." indicator. The indicator should repeat a set of dots, increasing in length with each call to the function, cycling after 3 dots (e.g., ".", "..", "..."). (Use repeat(), slice(), and concat()).
// 20. Parse QR Code Data into Actionable Commands
// Given a string extracted from a scanned QR code (e.g., {"action": "pay", "amount": "10.00"}), write a function that parses this string into a JavaScript object and returns the specific action and amount. (Use JSON.parse(), replace(), and split()).

// Obfuscate Sensitive Data in Mobile Inputs
// Create a function that obfuscates sensitive parts of a credit card number. For example, given the string "1234-5678-9876-5432", return "****-****-****-5432" for secure mobile display. Ensure it handles variations in formats. (Use replace(), regex, and slice()).
// 2. Truncate Mobile Notification Text Dynamically
// Given a string representing a mobile notification message, write a function to truncate it based on the screen size (e.g., limit to 50 characters on small screens and 100 on larger screens), appending "..." if truncated. Consider edge cases where the string is shorter than the limit. (Use slice(), length, and conditional logic).
// 3. Extract Domain from Mobile-Specific URLs
// Write a function that takes a URL from a mobile app and extracts only the domain name (e.g., from https://m.example.com/products, return "example.com"). Handle subdomains, query parameters, and trailing slashes. (Use split(), replace(), and substring()).
// 4. Convert Text-Based Emoji Codes to Unicode Emojis
// In mobile chat applications, users may input text-based emojis like ":smile:" or ":heart:". Write a function to convert these into actual Unicode emojis (e.g., 😊, ❤️). (Use replace(), split(), and a dictionary mapping).
// 5. Normalize Mobile Number Formatting Across Regions
// Write a function that normalizes phone numbers from different countries into a standard format (e.g., +1 (234) 567-8900 to "12345678900"). The function should strip spaces, dashes, and parentheses, and ensure consistent output for both local and international numbers. (Use replace(), regex, and slice()).
// 6. Search Autocomplete with Partial Matches
// In a mobile search bar, write a function that returns partial matches from a list of movie titles (from the dataset) as the user types. Ensure the search is case-insensitive and highlights the matching part of the string. (Use includes(), substring(), and replace()).
// 7. Convert Long Text to Readable Paragraphs
// Mobile screens often break long strings into paragraphs for readability. Write a function that converts a long string into paragraphs by inserting newlines (\n) every N characters, without breaking words. (Use split(), slice(), and join()).
// 8. Create a Dynamic Breadcrumb for Mobile Navigation
// For mobile navigation, create a function that takes a URL string (e.g., "example.com/products/electronics/phones") and converts it into a breadcrumb (e.g., "Home > Products > Electronics > Phones"), replacing slashes with arrows. (Use split(), join(), and replace()).
// 9. Detect Spam Links in User Messages
// In a mobile chat app, create a function that detects and flags potential spam links. The function should scan the message for URLs with suspicious domain names (e.g., free-gift.example.com). (Use includes(), match(), and regex).
// 10. Auto-Correct User Input in Mobile Forms
// Write a function that auto-corrects common misspellings in user input fields on mobile devices (e.g., correcting "teh" to "the"). The function should only change specific known words. (Use replace(), split(), and a dictionary mapping).
// 11. Handle URL Shorteners and Expansions
// For mobile users, URL shorteners (e.g., bit.ly/abc123) are common. Write a function that expands shortened URLs into their original full URLs for display purposes. (Use replace(), indexOf(), and external API calls for expansion).
// 12. Generate Random Verification Codes
// Mobile apps often send verification codes via SMS. Write a function that generates a 6-digit alphanumeric verification code. Ensure the code does not include confusing characters like "0" or "O". (Use Math.random(), slice(), and replace()).
// 13. Hide Personal Identifiable Information in Mobile Settings
// When displaying user data (like email addresses or names) in mobile settings, hide parts of the string for privacy. For example, "john.doe@example.com" should become "j***@example.com". (Use slice(), replace(), and regex).
// 14. Extract and Validate Mobile App Bundle Identifiers
// Write a function that extracts and validates a mobile app bundle identifier from a string (e.g., "com.example.app123"). Ensure the identifier follows the pattern of com.domain.appname. (Use match(), replace(), and regex).
// 15. Handle Dynamic Placeholders in Mobile Push Messages
// In mobile notifications, placeholders like {username} are often used. Write a function that replaces these placeholders dynamically based on user data (e.g., {username} becomes "John", {date} becomes "2024-10-10"). (Use replace(), split(), and dynamic variables).
// 16. Detect Mobile Device from User-Agent Strings
// Given a User-Agent string from a mobile browser (e.g., "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)"), write a function to detect the device type (e.g., iPhone, Android). (Use indexOf(), includes(), and substring()).
// 17. Format File Sizes for Mobile Displays
// Write a function that formats file sizes for mobile users, converting bytes into KB, MB, or GB as appropriate (e.g., "1048576 bytes" becomes "1 MB"). (Use replace(), slice(), and conditional logic).
// 18. Handle Emojis in Push Notifications
// Push notifications with emojis may need to be truncated to fit character limits. Write a function that handles the string length correctly, ensuring emojis count as one character, even if they are multi-byte. (Use length(), slice(), and Unicode character handling).
// 19. Detect and Prevent SQL Injection in Mobile Inputs
// Write a function that scans input strings for common SQL injection patterns (e.g., '; DROP TABLE), replacing or rejecting them. This is crucial for mobile apps where inputs can be tampered with. (Use replace(), regex, and a list of blacklisted characters).
// 20. Paginate Long Text for Mobile Scrolling
// Mobile apps often need to paginate long text (e.g., ebooks or articles). Write a function that splits a long string into pages, ensuring each page contains a maximum number of characters without breaking words. (Use split(), slice(), and join()).

// Formatting & Display
// Format Phone Numbers: Write a function that formats a US phone number string to the format (XXX) XXX-XXXX for mobile display.

// Truncate Text in Mobile Notifications: For mobile notifications, truncate a message to 100 characters and append "..." if it's too long.

// Auto-correct Common Typos: Create a function that auto-corrects specific misspelled words in a mobile input field (e.g., teh to the).

// Generate Dynamic Placeholder Text: Write a function that takes a placeholder like {name} and {location} and replaces them with user-specific data.

// Capitalize Each Word for Titles: For displaying titles on mobile, capitalize the first letter of each word in a sentence.

// Obfuscate Email for Display: Write a function that partially hides an email address for security purposes (e.g., john.doe@example.com becomes j****@example.com).

// Format File Sizes for Mobile: Convert file sizes given in bytes to a human-readable format (e.g., 1048576 bytes becomes 1 MB).

// Insert Line Breaks in Long Paragraphs: Insert a line break after every 50 characters in a long paragraph for easier mobile readability.

// Shorten URLs for Display in UI: Truncate long URLs to fit within 20 characters, appending "..." for links longer than this.

// Add Emoji Support in Messages: Write a function that converts text-based emojis (:smile:, :heart:) into their Unicode equivalents (😊, ❤️).

// Validation
// Validate International Phone Numbers: Write a function that verifies a phone number’s format based on its country prefix.

// Check for Valid Email Format: Create a function that ensures the input string has a valid email structure.

// Detect and Remove SQL Injection Patterns: For mobile form inputs, create a function that removes potential SQL injection patterns.

// Ensure Strong Password Input: Write a function that checks if a password meets criteria: at least 8 characters, one number, and one special character.

// Identify Suspicious Links in Chat: Detect suspicious links by flagging URLs with keywords like free-gift or win-now.

// Detect and Remove Hidden Characters in Input: Write a function that removes zero-width spaces or other hidden characters from user inputs.

// Check if Text Contains Restricted Words: For chat moderation, check if an input string contains any restricted words.

// Validate URL Format in Inputs: Ensure that a URL input starts with https:// for security reasons.

// Detect Malformed Data in JSON Strings: Write a function to validate JSON strings for syntax errors.

// Verify Alphanumeric Usernames: Ensure usernames only contain letters and numbers and are at least 5 characters long.

// Transformation & Conversion
// Standardize Date Formats in User Profiles: Convert dates like "MM/DD/YYYY" to "YYYY-MM-DD" format for consistent display.

// Camel Case to Title Case for Display: Convert camel case strings (myProfilePage) to title case (My Profile Page).

// Format Currency Strings for Display: Format numbers like 2500 to "$2,500" for financial displays on mobile.

// Convert Snake Case to Spaced Words: Convert strings like my_profile_page to My Profile Page for readability.

// Create a Dynamic Breadcrumb Display from URL: Take a URL (e.g., "example.com/shop/electronics/phones") and convert it into a breadcrumb (Home > Shop > Electronics > Phones).

// Convert Text Emojis to Symbols in Messages: Convert text-based emojis like :-) into their symbol equivalents (😊).

// Obfuscate Credit Card Number: Partially mask credit card numbers by replacing all but the last four digits with asterisks (****-****-****-1234).

// Highlight Search Terms in Results: Bold all occurrences of a user’s search term in a text snippet.

// Add Commas to Large Numbers: Format large numbers with commas for readability (e.g., 1000000 to 1,000,000).

// Convert URLs in Text to Hyperlinks: Detect URLs within a string and wrap them with <a> tags for clickable links.

// Parsing & Extraction
// Extract Domain from URL: Given a URL, extract and return only the domain name.

// Extract the Hashtag from a Social Post: In a mobile social media app, extract the first hashtag from a post (e.g., #travel #adventure).

// Find Mentions in Messages: Extract all @username mentions in a text message.

// Parse User-Agent for Device Type: Write a function that parses a User-Agent string and determines the device type (e.g., iPhone, Android).

// Extract File Extension from Filename: Given a filename, extract the file extension (e.g., "photo.jpg" to "jpg").

// Parse Date and Time Separately: Split a date-time string (e.g., "2024-10-15T14:30:00") into separate date and time components.

// Get Last Directory from File Path: Given a file path, extract the name of the last directory.

// Extract and Format Digits for Analytics ID: Given a mixed string, extract only the digits and format as an analytics ID (e.g., "ID#-123-456" to "123456").

// Extract the Year from a Timestamp: From a timestamp, extract just the year (e.g., "2024-10-15T14:30:00" to "2024").

// Detect Multiple Consecutive Spaces in Input: Write a function that checks if a string has multiple consecutive spaces.

// Modification & Replacement
// Remove HTML Tags from User Input: Create a function that removes all HTML tags from an input string for security.

// Limit Decimal Places in Number Display: For mobile financial data, round a number to 2 decimal places.

// Add Country Code to Local Phone Numbers: For mobile app inputs, add +1 to US numbers if missing.

// Replace Certain Words with Synonyms for Simplicity: Replace words like "purchase" with "buy" to simplify instructions.

// Remove Special Characters from Username: Remove non-alphanumeric characters from usernames before saving.

// Sanitize Filename for Upload: Remove or replace invalid characters in a filename to ensure it’s safe for uploading.

// Enforce Character Limits in Text Inputs: Write a function that prevents users from typing beyond a specified character limit in input fields.

// Normalize Capitalization in Full Names: Standardize the capitalization of full names (e.g., "jOhn sMith" to "John Smith").

// Shorten Long Hashtags for Display: Shorten hashtags that are more than 10 characters, appending "...".

// Replace Words with Emoji Equivalents: Write a function that replaces certain keywords (like "happy", "love") with corresponding emojis.

