interface ButtonProps {
  label: string;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  icon?: string;
  classes?: string;
}

/**
 * Primary Button
 */
export const ButtonPrimary: React.FC<ButtonProps> = ({
  label,
  href,
  target = '_self',
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={`btn btn-primary ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

/**
 * Outline Button
 */
export const ButtonOutline: React.FC<ButtonProps> = ({
  label,
  href,
  target = '_self',
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={`btn btn-outline ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};
