export const renderHighlightedText = (text) => {
  const regex = /{(.*?)}/g;
  let match;
  const segments = [];
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const { index } = match;
    segments.push(text.slice(lastIndex, index)); 
    segments.push(
      <span key={index} className='text-prim-1'>
        {match[1]}
      </span>
    );
    lastIndex = index + match[0].length;
  }

  segments.push(text.slice(lastIndex));
  return segments;
};