
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design tokens for the dark theme
const COLORS = {
  background: '#2a2a2a',
  inputBg: '#3a3a3a',
  textPrimary: '#ffffff',
  textSecondary: '#cccccc',
  textMuted: '#aaaaaa',
  textIcon: '#888888',
  textAccent: '#c07040', // Orange-brown for subtle highlights
  border: '#555555',
  buttonBg: '#b5541f', // Primary action button color
};

/**
 * Input field with label and info icon
 */
const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div style={{ marginTop: '16px' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '13px',
        color: COLORS.textSecondary,
        marginBottom: '6px',
      }}
    >
      <span>{label}</span>
      <AiOutlineInfoCircle style={{ color: COLORS.textIcon }} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      style={{
        backgroundColor: COLORS.inputBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: '4px',
        color: COLORS.textMuted,
        fontSize: '13px',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box',
        outline: 'none',
      }}
    />
  </div>
);

/**
 * Action button used for primary interactions
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      backgroundColor: COLORS.buttonBg,
      color: COLORS.textPrimary,
      border: 'none',
      borderRadius: '8px',
      padding: '10px 18px',
      fontWeight: '500',
      fontSize: '14px',
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

/**
 * TestCard - A UI magician agent dashboard card
 * 
 * Demonstrates a dark-themed UI for managing design-to-code agent tasks.
 */
export const TestCard = () => (
  <div
    id="testElem"
    style={{
      backgroundColor: COLORS.background,
      color: COLORS.textPrimary,
      padding: '20px',
      width: '280px',
      fontFamily: 'sans-serif',
    }}
  >
    {/* Header row */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontWeight: 'bold', fontSize: '18px', color: COLORS.textPrimary }}>
        UI magician Agent
      </span>
      <IoSettingsOutline style={{ color: COLORS.textMuted, fontSize: '20px' }} />
    </div>

    {/* Collapsed row - Represents a subtle status message */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginTop: '16px',
        color: COLORS.textAccent,
        fontSize: '13px',
      }}
    >
      <HiChevronUp />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Section heading for core configuration */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        fontSize: '15px',
        marginTop: '24px',
      }}
    >
      <HiChevronUp />
      <span>Add New Design</span>
    </div>

    <InputField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
    <InputField label="Design URL" placeholder="https://www.figma.com/file/:" />

    <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <div
      style={{
        marginTop: '32px',
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        fontSize: '15px',
      }}
    >
      Recent Breakdowns
    </div>
  </div>
);
