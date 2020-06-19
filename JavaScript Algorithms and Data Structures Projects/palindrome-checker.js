const palindrome = str =>str.replace(/[\W_]/g, "").toLowerCase() ===str
                    .replace(/[\W_]/g, "")
                    .toLowerCase()
                    .split("")
                    .reverse()
                    .join("")