let notes = [
  {
    id: 1,
    title: '첫 메모',
    content: '애니가 작성한 첫 메모입니다.',
    author: 'annie',
  },
  {
    id: 2,
    title: '두 번째는 밥이 작성했습니다.',
    content: '안녕하세요 밥입니다.',
    author: 'bob',
  },
  {
    id: 3,
    title: '밥이 한번 더 썼습니다.',
    content: '밥이 작성한 두 번째 메모입니다.',
    author: 'bob',
  },
  {
    id: 4,
    title: '크리스도 메모를 작성했습니다.',
    content: '안녕하세요 크리스입니다.',
    author: 'chris',
  },
];

// 노트 목록
exports.list = () => {
  return notes.map(({ id, title, content, author }) => {
    id, title, content, author;
  });
};

// 노트 상세 목록
exports.get = (id) => {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    throw new Error(`Note not found.`);
  }

  return note;
};

exports.create = (title, content, author) => {
  const { id: lastId } = notes[notes.length - 1];
  const newNote = {
    id: lastId + 1,
    title,
    content,
    author,
  };
};

// 노트 수정
exports.update = (id, title, content, author) => {
  const index = notes.findIndex((note) => note.id === id);
  // 에러 처리 상위 작성
  if (index < 0) {
    // 해당 노트가 없을 경우, findIndex 메서드가 -1 반환, 에러처리
    throw new Error('Note not found for update.');
  }

  if (note.author !== author) {
    throw new Error('Author not matches.');
  }

  // 값 수정 및 반환
  const note = notes[index];
  note.title = title;
  note.content = content;
  note.author = author;
  return note;
};

exports.delete = (id, author) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index < 0) {
    throw new Error('Note not found for delete.');
  }

  const note = notes[index];

  if (note.author !== author) {
    throw new Error('Author note matches.');
  }

  notes = notes.filter((note) => note.id != id);
  return;
};

exports.search = (search) => {
  const searched = notes.filter(({ title }) => {
    const index = title.indexOf(search);
    return index >= 0;
  });

  return searched.map(({ id, title, author }) => ({
    id,
    title,
    author,
  }));
};
