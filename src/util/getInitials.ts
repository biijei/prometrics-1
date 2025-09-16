export const getInitials = (name:string) => {
  if (!name || typeof name !== 'string') return 'NA'; // Handle invalid input

  const trimmedName = name.trim(); // Ensure no leading/trailing spaces
  const firstInitial = trimmedName.charAt(0) || ''; // First letter of the first word
  const lastInitial = trimmedName.charAt(trimmedName.lastIndexOf(' ') + 1) || ''; // First letter of the last word (if exists)

  return firstInitial && lastInitial ? firstInitial + lastInitial : firstInitial || 'NA'; // Return initials or 'NA'
};