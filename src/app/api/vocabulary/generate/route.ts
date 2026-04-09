import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    // Simulated AI Intelligence: Returning realistic IELTS words based on common themes
    const ieltsVocabularyPool = [
      { word: 'Ubiquitous', translation: 'Phổ biến', definition: 'Present, appearing, or found everywhere.' },
      { word: 'Pragmatic', translation: 'Thực tế', definition: 'Dealing with things sensibly and realistically.' },
      { word: 'Alleviate', translation: 'Giảm bớt', definition: 'Make (suffering, deficiency, or a problem) less severe.' },
      { word: 'Substantial', translation: 'Đáng kể', definition: 'Of considerable importance, size, or worth.' },
      { word: 'Detrimental', translation: 'Có hại', definition: 'Tending to cause harm.' },
      { word: 'Equitable', translation: 'Công bằng', definition: 'Fair and impartial.' },
      { word: 'Innovative', translation: 'Đổi mới', definition: 'Featuring new methods; advanced and original.' },
      { word: 'Resilient', translation: 'Kiên cường', definition: 'Able to withstand or recover quickly from difficult conditions.' },
      { word: 'Paradigm', translation: 'Mô hình/Khuôn mẫu', definition: 'A typical example or pattern of something.' },
      { word: 'Exacerbate', translation: 'Làm trầm trọng thêm', definition: 'Make (a problem, bad situation, or negative feeling) worse.' },
    ];

    // Select 5 random words from the pool and "contextualize" them to the topic
    const shuffled = ieltsVocabularyPool.sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 5).map(item => ({
      ...item,
      definition: `${item.definition} (Applied to ${topic})`
    }));

    // Add 2 topic-specific mocked words
    const topicSpecific = [
      {
        word: `${topic} Dynamics`,
        translation: `Động lực ${topic}`,
        definition: `The forces or properties which stimulate growth within ${topic}.`
      },
      {
        word: `Core ${topic}`,
        translation: `${topic} cốt lõi`,
        definition: `The central or most important part of ${topic}.`
      }
    ];

    return NextResponse.json({
      topic,
      words: [...selectedWords, ...topicSpecific]
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate vocabulary' }, { status: 500 });
  }
}
