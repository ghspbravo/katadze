import React from 'react'
import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';
import { useSpring, animated as a } from 'react-spring'

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal = ({ id, children, isOpen, closeModal }) => {
  const target = usePortal(id);

  const springOpacity = useSpring({ opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden' })

  return createPortal(
    <a.div style={springOpacity} className="modal" onClick={e => {
      if (e.target.classList.contains('modal')) closeModal()
      }}>
      <div className="modal-inner">
        {children}

        <div className="d-sm-none mt-3 row no-gutters">
          <button onClick={closeModal} className="mx-auto">Закрыть</button>
        </div>

        <button onClick={closeModal} className="d-none d-sm-block modal-close no-style">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </a.div>,
    target,
  );
};

export default Portal;