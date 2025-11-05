import React from 'react';

interface TagProps {
  tag: string;
  isActive?: boolean;
  onClick?: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, isActive = false, onClick }) => {
  const baseClasses = "text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200";
  const activeClasses = "bg-tag-bg-active text-tag-text-active";
  const inactiveClasses = "bg-tag-bg text-tag-text";
  const clickableClasses = "cursor-pointer hover:bg-tag-bg-active hover:text-tag-text-active";

  const finalClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${onClick ? clickableClasses : ''}`;

  return (
    <span className={finalClasses} onClick={() => onClick?.(tag)}>
      #{tag}
    </span>
  );
};

export default Tag;
