// src/components/LeadForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createLeadSchema, CreateLeadDto } from '@/validations/lead.zod';
import { useState } from 'react';

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateLeadDto>({
    resolver: zodResolver(createLeadSchema),
  });

  const onSubmit = async (data: CreateLeadDto) => {
    setIsSubmitting(true);
    try {
      // Integração direta com a API do Cazuá
      const response = await fetch('/api/cazua/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Falha ao registrar lead');
      reset();
      alert('Solicitação enviada com sucesso. Nossa equipe de engenharia entrará em contato.');
    } catch (error) {
      console.error('Erro na submissão do lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold font-montserrat text-[#15363D]">Solicite uma Avaliação</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          {...register('name')}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#15363D] focus:border-[#15363D]"
        />
        {errors.name && <span className="text-red-600 text-xs">{errors.name.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Telefone (Apenas números)</label>
        <input
          {...register('phone')}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#15363D] focus:border-[#15363D]"
        />
        {errors.phone && <span className="text-red-600 text-xs">{errors.phone.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo de Serviço</label>
        <select
          {...register('serviceType')}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#15363D] focus:border-[#15363D]"
        >
          <option value="">Selecione...</option>
          <option value="CONSTRUCTION">Construção e Execução</option>
          <option value="PROJECT">Projetos Estruturais</option>
          <option value="REPORT">Laudo e Investigação Patológica</option>
        </select>
        {errors.serviceType && <span className="text-red-600 text-xs">{errors.serviceType.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Breve Descrição (Opcional)</label>
        <textarea
          {...register('description')}
          rows={3}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#15363D] focus:border-[#15363D]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-[#15363D] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#0f272c] transition-colors disabled:opacity-70"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </button>
    </form>
  );
}