// Utility to clear all storage for testing
export function clearAllStorage() {
  localStorage.clear();
  sessionStorage.clear();
  console.log('Storage cleared');
}

// Run this in console: clearAllStorage()
if (typeof window !== 'undefined') {
  (window as any).clearAllStorage = clearAllStorage;
}
