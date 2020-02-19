
const exercises = {
  1: {
    1: {
      human: 'Brisk five-minute warmup walk.Then alternate 60 seconds ' +
     'of jogging and 90 seconds of walking for a total of 20 minutes.',
      machine: [1, 1, 1]
    },
    2: {
      human: 'Brisk five-minute warmup walk.Then alternate 60 seconds of' +
      'jogging and 90 seconds of walking for a total of 20 minutes.',
      machine: [4, 3, 2]
    },
    3: {
      human: 'Brisk five-minute warmup walk.Then alternate 60 seconds of' +
      'jogging and 90 seconds of walking for a total of 20 minutes.',
      machine: [1, 1, 1]
    }
  },
  2: {
    1: {
      human: 'Brisk five-minute warmups walks.Then alternate 90 seconds of' +
      'jogging and two minutes of walking for a total of 20 minutes.',
      machine: [1, 1, 1]
    },
    2: {
      human: 'Brisk five-minute warmup walk.Then alternate 90 seconds of' +
      'jogging and two minutes of walking for a total of 20 minutes.',
      machine: [1, 1, 1]
    },
    3: {
      human: 'Brisk five-minute warmup walk.Then alternate 90 seconds of' +
      'jogging and two minutes of walking for a total of 20 minutes.',
      machine: [300, 60, 90, 60, 90, 60, 90, 60, 90, 60, 90, 60, 90, 60, 90, 60, 90]
    }
  },
  3: {
    1: {
      human: 'Brisk five-minute warmup walk, then do two repetitions of' +
      'the following:Jog 200 yards (or 90 seconds) Walk 200 yards (or 90 seconds)' +
      'Jog 400 yards (or 3 minutes) Walk 400 yards (or three minutes)',
      machine: [2, 2, 2]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then do two repetitions of' +
      'the following:Jog 200 yards (or 90 seconds) Walk 200 yards (or 90 seconds)' +
      'Jog 400 yards (or 3 minutes) Walk 400 yards (or three minutes)',
      machine: [2, 2, 2]
    },
    3: {
      human: 'Brisk five-minute warmup walk, then do two repetitions of' +
      'the following:Jog 200 yards (or 90 seconds) Walk 200 yards (or 90 seconds)' +
      'Jog 400 yards (or 3 minutes) Walk 400 yards (or three minutes)',
      machine: [300, 90, 90, 180, 180]
    }
  },
  4: {
    1: {
      human: 'Brisk five-minute warmup walk, then: •Jog 1/4 mile (or 3 minutes)' +
      'Walk 1/8 mile (or 90 seconds) •Jog 1/2 mile (or 5 minutes) Walk 1/4 mile (or 2-1/2 minutes)' +
      'Jog 1/4 mile (or 3 minutes) • Walk 1/8 mile (or 90 seconds) • Jog 1/2 mile (or 5 minutes)',
      machine: [1, 1, 1]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then: •Jog 1/4 mile (or 3 minutes).' +
      'Walk 1/8 mile (or 90 seconds) •Jog 1/2 mile (or 5 minutes) Walk 1/4 mile (or 2-1/2 minutes).' +
      'Jog 1/4 mile (or 3 minutes) • Walk 1/8 mile (or 90 seconds) • Jog 1/2 mile (or 5 minutes)',
      machine: [300, 180, 90, 300, 120, 180, 90, 300]
    },
    3: {
      human: 'Brisk five-minute warmup walk, then: •Jog 1/4 mile (or 3 minutes) Walk 1/8 mile (or 90 seconds)' +
      'Jog 1/2 mile (or 5 minutes) Walk 1/4 mile (or 2-1/2 minutes) •Jog 1/4 mile (or 3 minutes)' +
      'Walk 1/8 mile (or 90 seconds) • Jog 1/2 mile (or 5 minutes)',
      machine: [300, 180, 90, 300, 120, 180, 90, 300]

    }
  },
  5: {
    1: {
      human: 'Brisk five-minute warmup walk, then: Jog 3/4 mile (or 8 minutes) Walk 1/2 mile (or 5 minutes)' +
      'Jog 3/4 mile (or 8 minutes).Brisk five-minute warmup walk, then jog two miles (or 20 minutes) with no walking.',
      machine: [1, 1, 1]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then: Jog 3/4 mile (or 8 minutes) Walk 1/2 mile (or 5 minutes)' +
      'Jog 3/4 mile (or 8 minutes)',
      machine: [300, 480, 300, 480]
    },
    3: {
      human: 'Brisk five-minute warmup walk, then: Jog two miles (or 20 minutes) with no walking.',
      machine: [300, 1200]
    }
  },
  6: {
    1: {
      human: 'Brissk five-minute warmup walk, then: • Jog 1/2 mile(or 5 minutes) Walk 1/4 mile (or 3 minutes)' +
      'Jog 3/4 mile (or 8 minutes) Walk 1/4 mile (or 3 minutes) • Jog 1/2 mile (or 5 minutes)',
      machine: [1, 1, 1]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then: • Jog 1 mile minutes) Walk 1/4 mile (or 3 minutes).' +
      'Jog 1 mile (or 10 minutes)',
      machine: [300, 600, 180]
    },
    3: {
      human: 'Brisk five-minute warmup walk, then: • Jog 2-1/4 mile or 22 minutes with no walking.',
      machine: [1, 1]
    }
  },
  7: {
    1: {
      human: 'Brisk five-minute warmup walk, then jog 2.5 miles (or 25 minutes)',
      machine: [300, 1800]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then jog 2.5 miles (or 25 minutes)',
      machine: [300, 1800]
    },
    3: {
      human: 'Brisk five-minute warmup walk, then jog 2.5 miles (or 25 minutes)',
      machine: [300, 1800]
    }
  },
  8: {
    1: {
      human: 'Brisk five-minute warmup walk, then jog 2.75 miles (or 28 minutes).',
      machine: [300, 1800]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then jog 2.75 miles (or 28 minutes).',
      machine: [300, 1800]
    },
    3: {
      human: 'Brisk five-minute warmup walk, then jog 2.75 miles (or 28 minutes).',
      machine: [300, 1800]
    }
  },
  9: {
    1: {
      human: 'Brisk five-minute warmup walk, then jog 3 miles (or 30 minutes).',
      machine: [300, 1800]
    },
    2: {
      human: 'Brisk five-minute warmup walk, then jog 3 miles (or 30 minutes).',
      machine: [300, 1800]
    },
    3: {
      human: 'The final workout! Congratulations! Brisk five-minute warmup walk, then jog 3 miles (or 30 minutes).',
      machine: [300, 1800]
    }
  }
};
export default exercises;
