import '@testing-library/jest-dom'

// Mock IntersectionObserver for tests
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(element) {
    // Immediately trigger as visible for tests
    this.callback([{ isIntersecting: true, target: element }]);
  }
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;
