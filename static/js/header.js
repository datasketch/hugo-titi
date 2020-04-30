const configHeader = () => {
  const header = document.getElementById('main-header');
  const behaviors = ['mixed', 'normal', 'sticky'];
  let config;

  try {
    config = JSON.parse(header.dataset.config);
    header.removeAttribute('data-config');
  } catch (error) {
    return;
  }

  const {
    behavior,
    bg_color,
    bg_color_class,
    text_color,
    text_color_class,
  } = config;

  // Add config classes
  bg_color_class && header.classList.add(bg_color_class);
  text_color_class && header.classList.add(text_color_class);

  // Add config styles
  header.style.color = text_color;
  header.style.backgroundColor = bg_color;

  if (!behavior || behavior === 'normal' || !behaviors.includes(behavior)) {
    return;
  }

  if (behavior === 'sticky') {
    header.classList.add('sticky', 'top-0');
  }

  if (behavior === 'mixed') {
    // Remove config values
    bg_color_class && header.classList.remove(bg_color_class);
    header.style.backgroundColor = '';

    header.classList.add('absolute');

    const main = document.getElementById('main-content');
    const thresholdElement = main.children[0];

    if (!thresholdElement) {
      return;
    }

    const computedThresholdElementPT = window
      .getComputedStyle(thresholdElement)
      .getPropertyValue('padding-top');

    const thresholdElementPT = parseInt(
      computedThresholdElementPT.slice(0, -2),
      10
    );

    const headerHeight = header.offsetHeight;

    if (headerHeight > thresholdElementPT) {
      thresholdElement.style.paddingTop = `${
        thresholdElementPT + headerHeight
      }px`;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      const observedEntry = entries[0];
      if (observedEntry.isIntersecting) {
        header.classList.remove('absolute');
        header.classList.add('fixed');
        bg_color_class && header.classList.remove(bg_color_class);
        header.style.backgroundColor = '';
      } else {
        header.classList.remove('absolute');
        header.classList.add('fixed');
        bg_color_class && header.classList.add(bg_color_class);
        header.style.backgroundColor = bg_color;
      }
    });

    observer.observe(thresholdElement);
  }
};

window.addEventListener('load', configHeader);
